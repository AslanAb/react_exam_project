export interface IItem {
    id: number,
    name: string,
    total_cost: number,
    one_item_average_price: number,
    total_price: number,
    quantity: number
}
export interface IItems {
    items: IItem[]
}

export interface IBalance {
    balance: number
}

export interface IHistory {
    id: number
    nameOfOperation: string,
    item_name: string,
    quantity: number,
    price: number,
}

export interface IHistories {
    history: IHistory[]
}
