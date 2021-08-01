export interface ItemInNode {
  id: string;
  status: boolean;
  description: string;
}

export interface Item {
  id: string;
  title: string;
  description: string;
  time: string;
  items: ItemInNode[]
  color: string
}
