import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { PiFacebookLogoFill, PiInstagramLogoFill, PiLinkedinLogoFill, PiTwitchLogoFill } from 'react-icons/pi'
const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font uppercase font-bold text-gray-900 tracking-widest text-lg f mb-3">
                                Company
                            </h2>
                            <ul className="list-none mb-10">

                                <li>
                                    <Link href={'/'} className="text-gray-600 text-base tracking-tight hover:text-gray-900 hover:font-bold">Home</Link>
                                </li>
                                <li>
                                    <Link href={'/'} className="text-gray-600 text-base tracking-tight hover:text-gray-900 hover:font-bold">About Us</Link>
                                </li>
                                <li>
                                    <Link href={'/'} className="text-gray-600 text-base tracking-tight hover:text-gray-900 hover:font-bold">Contact Us</Link>
                                </li>





                            </ul>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font uppercase font-bold text-gray-900 tracking-widest text-lg f mb-3">
                                services
                            </h2>
                            <ul className="list-none mb-10">

                                <li>
                                    <Link href={'/'} className="text-gray-600 text-base tracking-tight hover:text-gray-900 hover:font-bold">Branding</Link>
                                </li>
                                <li>
                                    <Link href={'/'} className="text-gray-600 text-base tracking-tight hover:text-gray-900 hover:font-bold">Designing</Link>
                                </li>
                                <li>
                                    <Link href={'/'} className="text-gray-600 text-base tracking-tight hover:text-gray-900 hover:font-bold">Marketing</Link>
                                </li>
                                <li>
                                    <Link href={'/'} className="text-gray-600 text-base tracking-tight hover:text-gray-900 hover:font-bold">Advertisement</Link>
                                </li>



                            </ul>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font uppercase font-bold text-gray-900 tracking-widest text-lg f mb-3">
                                legal
                            </h2>
                            <ul className="list-none mb-10">
                                <li>
                                    <Link href={'/'} className="text-gray-600 text-base tracking-tight hover:text-gray-900 hover:font-bold">Terms of Use </Link>
                                </li>
                                <li>
                                    <Link href={'/'} className="text-gray-600 text-base tracking-tight hover:text-gray-900 hover:font-bold">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href={'/'} className="text-gray-600 text-base tracking-tight hover:text-gray-900 hover:font-bold">Cookie Policy</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                SUBSCRIBE
                            </h2>
                            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <label
                                        htmlFor="footer-field"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        id="footer-field"
                                        name="footer-field"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                                <Button variant={'outline'} className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                    Get Notified
                                </Button>
                            </div>
                            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                                Please provide email
                                <br className="lg:block hidden" />
                                to get notified for promos
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <Link
                            href='/'
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                                web<span className='text-blue-400'>Shop</span>
                            </span>
                        </Link>

                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                            © 2020 webShop —

                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <Link href={''} className="text-gray-500">
                                <PiFacebookLogoFill className='h-5 w-5' />
                            </Link>
                            <Link href={''} className="ml-3 text-gray-500">
                                <PiTwitchLogoFill className='h-5 w-5' />
                            </Link>
                            <Link href={''} className="ml-3 text-gray-500">
                                <PiInstagramLogoFill className='h-5 w-5' />
                            </Link>
                            <Link href={''} className="ml-3 text-gray-500">
                                <PiLinkedinLogoFill className='h-5 w-5' />
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer;

