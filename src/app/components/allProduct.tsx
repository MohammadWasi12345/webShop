import React from 'react';
import { client } from '../lib/sanity';
import { simplifiedProduct } from '../interface';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';

const getData = async() => {
    const query = `*[_type == 'product']{
        _id,
        price,
        name,
        "slug":slug.current,
        "categoryName":category->name,
        "imageUrl": image[0].asset->url
    }`;
    const data = await client.fetch(query);
    return data;
}

const AllProduct = async () => {
    const data: simplifiedProduct[] = await getData();
    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold tracking-tight text-grey-900'>
                        Our All Products 
                    </h1>
                   
                   
                </div>
                <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                    {data.map((product) => (
                        <div key={product._id} className='group relative'>
                            <div className='aspect-square w-full overflow-hidden rounded-md bg-grey-500 group-hover:opacity-75 lg:h-80'>
                                {/* Example: Use imageUrl here if needed */}
                                <Image
                                 src={product.imageUrl} 
                                 alt={product.name}
                                  className='w-full h-full object-cover'
                                  width={300}
                                  height={300}
                                   />
                            </div>
                            <div className='mt-4 flex justify-between'>
                                <div>
                                    <h3 className='text-sm text-grey-700'>
                                        <Link href={`/product/${product.slug}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </Link>
                                    </h3>
                                    <p className='mt-1 text-sm text-grey-500'>{product.categoryName}</p>
                                </div>
                                <p className='text-sm font-medium text-grey-900'>${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllProduct;
