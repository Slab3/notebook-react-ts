import React from 'react';
// import '../../../styles/_modal.scss';

interface IModal {
  isActive: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  id: string
  deleteNote(id:string): void
  // type: string
}

export const Modal: React.FC<IModal> = ({isActive, setActive, id, deleteNote}) => {

  const removeNote = ()=> {
    setActive(false);
    //if need animation of closing element - add timeout.
    setTimeout(()=> {
      deleteNote(id);
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
