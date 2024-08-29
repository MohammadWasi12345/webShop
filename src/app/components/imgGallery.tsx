"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { urlFor } from '../lib/sanity';  // Ensure the path is correct
import { LuDivideCircle } from 'react-icons/lu';  // Assuming you want to use this icon somewhere
interface iAppImages {
  images:string[];  // Adjust the type according to your image data structure
}

const ImgGallery = ({ images }: iAppImages) => {
    const [bigImg ,setImg] = useState(images[0]);
    const handleSmImg = (image:any)=>{
        setImg(image);
    }
 

  return (
    <div className='grid gap-4 lg:grid-cols-5'>
      <div className='order-last flex lg:order-none lg:flex-col gap-4'>
        {images.map((image:any, idx:any) => (
          <div key={idx} className='overflow-hidden  md:mt-5 rounded-lg bg-slate-800'>
            <Image 
              src={urlFor(image).url()}
              alt='product img'
              className='object-cover object-center w-full cursor-pointer h-full'
              width={200}
              height={200}
              onClick={()=>setImg(image)}
            />
          </div>
        ))}
      </div>
      <div className='relative overflow-hidden rounded-lg bg-slate-200 md:mt-5 lg:col-span-4'>
        <Image 
        src={urlFor(bigImg).url()}
        alt='product img'
        width={500}
        height={500}
        className='h-full w-full object-cover object-center'
        
        />
        <span className='bg-red-500 tracking-wider absolute top-0 left-0 rounded-br-lg px-3 py-1.5 text-sm text-white uppercase'>sale</span>

      </div>
    </div>
  );
};

export default ImgGallery;
