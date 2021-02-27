import {BtnAddNote, NoteWrapper} from "../../index";
import {Item} from "../../../types/item";
import {Notes} from "../../../context/notes";
import React, {useContext, useEffect} from "react";

export default function Content() {
  const { notes } = useContext(Notes);

  useEffect(() => {
    // console.log( notes );
  }, [notes]);

  return (
    <div className="notes" id="notes">
      {notes.map((args: Item) => (
        <NoteWrapper key={args.id} {...args} />
      ))}
      <BtnAddNote/>
    </div>
  )
}