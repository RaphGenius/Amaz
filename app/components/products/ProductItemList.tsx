import React from 'react'
import { Link } from 'react-router'
import type { Product } from '~/types/product'
import { Button } from '../ui/button'

type Props = {
    product: Product
}

function ProductItemList({ product }: Props) {
    const calculDiscount = (product.price / product.discountPercentage * 100).toFixed(2)
    const isAvailable = product.stock > 0
    return (
        <div className='flex gap-4 h-full  rounded bg-primary-foreground '>
            <div className=' bg-secondary'>
                <Link to={`/product/${product.id}`}>
                    <div className='w-[200px] mx-auto'>
                        <img src={product.thumbnail} alt={`${product.title} picture`} className='object-scale-down w-full h-full' />
                    </div>
                </Link>
            </div>
            <div className='w-full space-y-2 p-4'>
                <Link to={`/product/${product.id}`}>
                    <h2 className='text-xl hover:underline font-mono'>{product.title} </h2>
                </Link>
                <p className="space-x-2">
                    <span>{product.price}$</span>
                    <span className="line-through text-sm">{calculDiscount}</span>
                </p>
                <div>
                    <p className="text-sm mt-0.5 text-primary"> {product.description}</p>
                </div>
                <Button disabled={!isAvailable} variant={"outline"} className="block text-primary-foreground  bg-primary ">
                    {isAvailable ? "Add to cart" : "Out of stock"}
                </Button>
            </div>
        </div>
    )
}

export default ProductItemList