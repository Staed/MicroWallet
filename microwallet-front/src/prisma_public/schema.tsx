export interface Transaction {
    id: string;
    owner: User;
    type: Coin;
    amount: number;
    notes: string;
}

export interface User {
    id: string;
    name: string;
}

export interface Coin {
    id: string;
    name: string;
}