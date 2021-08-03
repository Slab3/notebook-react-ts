import React, {useContext, useEffect, useState} from "react";
import {BtnAddNote, NoteWrapper, Search} from "../../index";
import {Item} from "../../../types/item";
import {Notes} from "../../../context/notes";

export default function Content() {
  const { notes } = useContext(Notes);

  // filtering Notes through search
  const [search, setSearch] = useState<string>('');
  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  };

  // localStorage for "search"
  useEffect(()=> {
    const saved = localStorage.getItem("search") || "" as string;
    setSearch(saved);
  }, []);
  useEffect(()=> { localStorage.setItem("search", search); },[search]);

  let filterByTitle = notes.filter((note) => {
    return note.title.toUpperCase().indexOf(search.toUpperCase()) >= 0;
  });
  let filterByDescription = notes.filter((note) => {
    let noteItemDesc = note.items.map((item)=>{
      return item.description;
    });
    return noteItemDesc.toLocaleString().toUpperCase().indexOf(search.toUpperCase()) >= 0;
  });

  // new array with filtered notes
  let filteredNotes = filterByTitle.length !== 0 ? filterByTitle : filterByDescription;

  // alerts
  const noNotesAlert = (<li className={"alertContent"}>There are no notes yet!</li>);
  const noTitleMatchAlert = (<li className={"alertContent"}>No title matches found. Search by description...</li>);
  const nothingFoundAlert = (<li className={"alertContent"}>You don't have a note with this title or description!</li>);

  const removeAllItems = ()=> {
    const confirmDeletion = window.confirm('Are you sure, you want to delete all notes?');
    if (confirmDeletion) {
      localStorage.setItem("notes", JSON.stringify([]));
      localStorage.setItem("search", "");
      window.location.reload();
    }
  };

  return (
    <>
      <button className={"remove-all-btn"} onClick={()=> removeAllItems()}>Remove all notes</button>

      <Search search={search} onSearchChange={searchChangeHandler} />
      {filterByTitle.length === 0 && notes.length !== 0 && filteredNotes.length !== 0 ? noTitleMatchAlert : null}
      {notes.length === 0 ? noNotesAlert : null}
      {filteredNotes.length === 0 && notes.length !== 0 ? nothingFoundAlert : null}

      <div className="notes" id="notes">
        {filteredNotes.map((args: Item) => (
          <NoteWrapper key={args.id} {...args} />
        ))}
        <BtnAddNote/>
      </div>
    </>
  )
}

