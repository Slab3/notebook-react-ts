export interface Item {
  id: string
  title: string
  description: string
  time: string
  items: ItemInNote[]
  color: string
}

export interface ItemInNote {
  id: string
  status: boolean
  description: string
}

