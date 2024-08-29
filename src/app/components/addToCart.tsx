'use client';
import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity'


export interface ProductItem {
    name: string,
    currency: string,
    price: number,
    image: any,
    description: string,
    price_id:string
}

const AddToCart = ({ name, currency, price, image, description ,price_id}: ProductItem) => {
    const { handleCartClick, addItem } = useShoppingCart();
    const product = {
        name: name,
        currency: currency,
        price: price,
        image: urlFor(image).url(),
        description: description,
        price_id:price_id
    };
    return (
        <Button
           className='hover:bg-blue-400 '
            variant={'secondary'}
            onClick={() => { addItem(product), handleCartClick() }}
        >
            Add to Cart
        </Button>
    )
}

export default AddToCart