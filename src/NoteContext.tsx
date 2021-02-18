import {createContext, Dispatch} from "react";
import {Item} from "./types/item";

export const NoteContext = createContext({
  notes: [] as Item[],
  setNotes: (items: Item[]) => {},
  updateItem: (id: Item, item: Item): void => { //, notes: Item...
    return console.log("test update");
  },
  deleteItem: (id: Item) => {
    console.log("test delete");
  },
  addItem: () => {
    console.log("test add");
  },
});
