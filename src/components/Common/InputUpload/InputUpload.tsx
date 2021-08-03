import React from 'react';
import styles from "./InputUpload.module.scss";

interface IUploadInp {
  drag: boolean
  setDrag: React.Dispatch<React.SetStateAction<boolean>>
  onUpload(title: string): void
}

export const InputUpload: React.FC<IUploadInp> = ({ drag, setDrag, onUpload }) => {
  let itemText = "";

  const classes=[styles.dropArea];
  if (drag) {
    classes.push(styles.dropAreaActive)
  } else if (!drag) {
    classes.push(styles.dropAreaInactive)
  }

 return (
   <div>
     <div className={classes.join(" ")}
       onDragEnter={(e)=> {e.preventDefault(); setDrag(true);}}
       onDragLeave={(e)=> {e.preventDefault(); setDrag(false);}}
       onDragOver={(e) => {e.preventDefault();}}
       onDrop={(e) => {
         e.preventDefault();
         setDrag(false);

         Array.from(e.dataTransfer.files)
           .filter((file) => file.type === "application/vnd.ms-excel" || file.type === "text/plain" || file.type === "text/csv")
           .forEach(async (file)=> {
             // console.log(file);
             itemText = await file.text();
             await onUpload(itemText);
           });
       }}
     >
       DROP FILE HERE
     </div>
   </div>
 )
};

export default InputUpload;
