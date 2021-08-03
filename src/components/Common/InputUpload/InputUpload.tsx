import React, {useRef} from 'react';
import styles from "./InputUpload.module.scss";

interface IUploadInp {
  drag: boolean
  setDrag: React.Dispatch<React.SetStateAction<boolean>>
  onUpload(title: string): void
}

export const InputUpload: React.FC<IUploadInp> = ({ drag, setDrag, onUpload }) => {
  const inputFile = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onDropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    setDrag(false);

    Array.from(e.dataTransfer.files)
      .filter((file) => file.type === "text/plain" || file.type === "text/csv" || file.type === "application/vnd.ms-excel")
      .forEach(async (file)=> {
        // console.log(file);
        let itemText = await file.text();
        await onUpload(itemText);
      });
  };

  const inputUpload = async (e: React.ChangeEvent<HTMLInputElement>)=> {
    if (!e.target.files || e.target.files.length === 0) return;
    let file = e.target.files[0];
    if (file.type !== "text/plain" && file.type !== "text/csv" && file.type !== "application/vnd.ms-excel") return;
    let reader = new FileReader();
    await reader.readAsText(file);

    reader.onload = function () {
      onUpload(reader.result as string);
    };
    reader.onerror = function () {
      console.log(reader.error)
    };
  };

  const classes=[styles.dropArea];
  if (drag) {
    classes.push(styles.dropAreaActive)
  } else if (!drag) {
    classes.push(styles.dropAreaInactive)
  }

 return (
   <div>
     <div
       className={classes.join(" ")}
       id={"uploadInput"}
       onClick={()=> inputFile.current.click()}
       onDragEnter={(e)=> {e.preventDefault(); setDrag(true);}}
       onDragLeave={(e)=> {e.preventDefault(); setDrag(false);}}
       onDragOver={(e) => {e.preventDefault(); setDrag(true)}}
       onDrop={(e) => onDropHandler(e)}
     >
       DROP FILE HERE
       <input
         type='file'
         id='file'
         ref={inputFile}
         style={{display: 'none'}}
         onChange={inputUpload}
       />
     </div>
   </div>
 )
};

export default InputUpload;
