'use client';
import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from 'use-shopping-cart';
import Image from 'next/image';
import { Button } from '@/components/ui/button';



const Cart = () => {
    
    const { cartCount,redirectToCheckout, shouldDisplayCart,totalPrice, handleCartClick ,cartDetails, removeItem} = useShoppingCart();
    async function handleCheckout(enent:any) {
        enent.preventDefault();
        try{
          const result = await redirectToCheckout()
          if(result?.error){
            console.log(result.error)
          }
        }catch(error){
            console.log(error)
        }
        
    }
    return (
        <Sheet open={shouldDisplayCart} onOpenChange={()=>handleCartClick()}>

            <SheetContent className='sm:max-w-lg w-[90vw] bg-slate-50'>
                <SheetHeader>
                    <SheetTitle>SHOPPING CART</SheetTitle>

                    <div className='h-full flex flex-col justify-between'>
                        <div className='mt-8 flex-1 overflow-hidden'>
                            <ul className='-my-6 divide-y divide-gray-200'>
                                {cartCount === 0 ?(
                            <h1 className='py-6'>You Dont Have Any Item</h1>

                                ):(<>
                                  {Object.values(cartDetails ?? {}).map((entry)=>(
                                    <li key={entry.id} className='py-6 flex'>
                                        <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                            <Image src={entry.image as string} alt='img' width={100} height={100} />
                    

                                        </div>
                                        <div className='ml-2 flex flex-1 flex-col '>
                                            <div>
                                                <div className='flex justify-between font-medium text-base text-gray-900'>
                                                   <h3>{entry.name}</h3>
                                                   <p className='ml-4'>${entry.price}</p>
                                                </div>
                                                <p className='mt-3 line-clamp-2 text-gray-500'>{entry.description}</p>
                                            </div>
                                            <div className='flex flex-1 items-end justify-between text-sm'>
                                                <p className='mt-3 text-gray-500'>QTY :{entry.quantity}</p>

                                                <div className='flex'>
                                                    <button type='button' onClick={()=>removeItem(entry.id)} className='mt-3 text-destructive font-medium hover:text-destructive/80'>
                                                        Remove

                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    </li>
                                  ))}
                                
                                    
                                   </>

                                )}

                            </ul>
                        </div>
                        <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                            <div className='flex justify-between text-base font-medium text-gray-900'>
                                <p>Subtotal:</p>
                                <p>${totalPrice}</p>

                            </div>
                            <p className='mt-0.5 text-sm text-gray-500'>shipping and taxes are calculated at checkout</p>
                              
                              <div className='mt-6'>
                                <Button onClick={handleCheckout} className='w-full border bg-blue-400'>checkout</Button>

                              </div>
                              <div className='mt-6 flex justify-center items-center text-center text-sm text-gray-500'>
                                <p>
                                    OR{" "}
                                    <button onClick={()=>handleCartClick()} className='text-red-400 hover:text-destructive/80 text-sm'>Continue Shopping</button>
                                </p>

                              </div>
                        </div>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default Cart


