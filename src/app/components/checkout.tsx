'use client';
import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity'
import  { ProductItem } from './addToCart';



const Checkout = ({ name, currency, price, image, description ,price_id}: ProductItem) => {
    const { checkoutSingleItem } = useShoppingCart();
function buyNow(priceId:string){
    checkoutSingleItem(priceId)
}
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
            onClick={() => { buyNow(product.price_id)}}
        >
            Checkout Now
        </Button>
    )
}

export default Checkout