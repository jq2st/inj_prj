import { Item } from 'src/app/catalog-page/catalog/catalog.component';

export interface Category {
    id?: string,
    name: string
}

export interface Order {
    id?: string,
    username?: string,
    phone?: string,
    adress?: string
    items?: string
}

export interface FAuth {
    idToken: string,
    expiresIn: string
}

export interface fResp {
    name: string
}