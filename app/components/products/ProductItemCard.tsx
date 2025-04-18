import React from 'react'
import type { Product } from '~/types/product'
import { Button } from '../ui/button'
import { Link } from 'react-router'

interface Props {
    product: Product
}

function ProductItemCard({ product }: Props) {

    return (
        <div className=' rounded group overflow-hidden min-h-[200px] w-full  shadow-white'>
            <Link to={`/product/${product.id}`}>
                <div className='h-[150px] w-full'>
                    <img src={product.thumbnail} alt={`${product.title} picture`} className='object-scale-down w-full h-full' />
                </div>
            </Link>
            <div className='h-full bg-primary text-primary-foreground  p-2 line-clamp-1 flex flex-col'>
                <div>
                    <Link to={`/product/${product.id}`}>
                        <h2 className='text-sm hover:underline font-mono'>{product.title} </h2>
                    </Link>
                </div>
                <p className='text-right'>${product.price} </p>
            </div>
        </div>
    )
}

export default ProductItemCard

