import type { ProductsAPI } from "~/types/api";
import type { Product } from "~/types/product";

const baseUrl = 'https://dummyjson.com/products'

interface GetProductsParams {
    search: string | null
}

const getProducts = async ({ search }: GetProductsParams) => {
    const searchProductUrl = search ? baseUrl + `/search?q=${search}` : baseUrl
    const response = await fetch(`${searchProductUrl}`, {
        headers: {
            "content-type": "application/json"
        }
    });
    const data = await response.json() as ProductsAPI
    return data
}

const getProduct = async (id: number) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        headers: {
            "content-type": "application/json"
        }
    });
    const data = await response.json() as Product
    return data
}


export { getProducts, getProduct }