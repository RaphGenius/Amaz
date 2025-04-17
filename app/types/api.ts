import type { Product } from "./product"

export interface ResponseAPI {
    total: number,
    skip: number,
    limit: number
}

export interface ProductsAPI extends ResponseAPI {
    products: Product[]
}

