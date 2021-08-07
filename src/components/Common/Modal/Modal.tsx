import React from 'react';

interface IModal {
  isActive: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  id: string
  functionEvent(id:string): void
  // type: string
}

export const Modal: React.FC<IModal> = ({isActive, setActive, id, functionEvent}) => {
  if (isActive) {document.body.style.overflow = "hidden"} // turn off scroll when "modal" active
  if (!isActive) {document.body.style.overflow = "visible"}

  const removeNote = (): void => {
    setActive(false);
    //if need animation of closing element - add timeout.
    setTimeout(()=> {
      functionEvent(id);                     //deleteNote
    },200)
  };


  return (
    <div className={isActive ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={isActive ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
        <div>
          <h3 className={"heading"}>Delete</h3>
          <p className={"text-confirm"}>Are you sure you want to delete this item?</p>
          <div className="buttons-modal-block">
            <span className="cancel btn modalBtn" onClick={()=>setActive(false)}>Cancel</span>
            <span className="delete btn modalBtn" onClick={removeNote}>Delete</span>
          </div>
        </div>

      {/*  another types ... */}
      </div>
    </div>
  )
};

export default Modal;
