"use client";
import React, { ReactNode } from 'react'
import { CartProvider } from 'use-shopping-cart';

const Cartprovider = ({children}:{children:ReactNode}) => {
    return (
        <CartProvider
         mode='payment' 
         cartMode='client-only'
          currency='USD' 
          stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
          shouldPersist ={true}
          language='en-US'
          billingAddressCollection ={true}
          successUrl='https://localhost3000/success'
          cancelUrl='https://localhost3000/error'

        >
            {children}

        </CartProvider>

    )
}

export default Cartprovider