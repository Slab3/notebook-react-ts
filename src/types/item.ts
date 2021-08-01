export interface ItemInNote {
  id: string;
  status: boolean;
  description: string;
}

export interface Item {
  id: string;
  title: string;
  description: string;
  time: string;
  items: ItemInNote[]
  color: string
}
