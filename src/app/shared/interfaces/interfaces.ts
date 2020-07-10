import { Item } from 'src/app/catalog-page/catalog/catalog.component';

export interface Category {
    id?: number,
    name: string
}

export interface Order {
    id?: number,
    username?: string,
    phone?: string,
    adress?: string
    items?: string
}

export interface FAuth {
    idToken: string
}