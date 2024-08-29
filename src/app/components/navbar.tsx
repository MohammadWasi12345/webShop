'use client';
import React from 'react';
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { LuMenuSquare } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { usePathname } from 'next/navigation';
import { link } from 'fs';
import { Linden_Hill } from 'next/font/google';
import { useShoppingCart } from 'use-shopping-cart';
import { Button } from '@/components/ui/button';

const links = [
    { name: 'Home', hreh: '/' },
    { name: 'men', hreh: '/men' },
    { name: 'women', hreh: '/women' },
    { name: 'teens', hreh: '/teens' },
];

const Navbar = () => {
    const usePathName = usePathname();
    const {handleCartClick}= useShoppingCart();
    return (
        <div>
            <nav className="bg-white border-gray-200 drop-shadow-2xl dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link
                        href='/'
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                            web<span className='text-blue-400'>Shop</span>
                        </span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Button
                            variant={'outline'}
                            onClick={()=>handleCartClick()}
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <LuShoppingCart className='text-2xl' />
                        </Button>
                        <Sheet>
                            <SheetTrigger className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <LuMenuSquare className='text-3xl' />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>
                                        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                                            web<span className='text-blue-400'>Shop</span>
                                        </span>
                                    </SheetTitle>
                                    <SheetDescription>
                                        <div className="items-center justify-between w-full md:flex md:w-auto md:order-1">
                                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                                {links.map((link, idx) => (
                                                    <li key={idx}>
                                                        {usePathName === link.hreh ? (
                                                            <Link href={link.hreh} className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{link.name}</Link>

                                                        ) :
                                                            (
                                                                <Link href={link.hreh} className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{link.name}</Link>









                                                            )
                                                        }

                                                    </li>

                                                ))}
                                            </ul>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="items-center hidden justify-between w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {links.map((link, idx) => (
                                <li key={idx}>
                                    {usePathName === link.hreh ? (
                                        <Link href={link.hreh}  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{link.name}</Link>

                                    ) :
                                        (
                                            <Link href={link.hreh} className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{link.name}</Link>









                                        )
                                    }

                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
