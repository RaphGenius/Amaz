import React from 'react'
import type { Product } from '~/types/product'
import { Button } from '../ui/button'
import { Link } from 'react-router'

interface Props {
    product: Product
}

function ProductItem({ product }: Props) {

    return (
        <div className='bg-white rounded group overflow-hidden min-h-[200px] w-full even:bg-slate-100 shadow-white'>
            <Link to={`/product/${product.id}`}>
                <div className='h-[150px] w-full'>
                    <img src={product.thumbnail} className='object-scale-down w-full h-full' />
                </div>
            </Link>
            <div className='h-full bg-white  group-odd:bg-slate-100 p-2 line-clamp-1 flex flex-col'>
                <div>
                    <Link to={`/product/${product.id}`}>
                        <h2 className='text-xs hover:underline'>{product.title} </h2>
                    </Link>
                </div>
                <div className='flex justify-between'>
                    <button>Add</button>
                    <p className='text-right text-slate-400'>${product.price} </p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem

