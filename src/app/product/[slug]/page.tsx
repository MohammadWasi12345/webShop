import React from 'react';
import { client } from '@/app/lib/sanity';
import { fullProduct } from '@/app/interface';
import ImgGallery from '@/app/components/imgGallery';
import { Star, Truck } from 'lucide-react';
import { Button } from "@/components/ui/button"
import AddToCart from '@/app/components/addToCart';


const getData = async (slug: string) => {
    const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
        image,
        description,
        name,
        price,
        "slug": slug.current,
        "categoryName": category->name,
        price_id
        
    }`;
    const data = await client.fetch(query);
    return data;
}

const ProductPage = async ({ params }: { params: { slug: string } }) => {
    const data: fullProduct = await getData(params.slug);
    return (
        <div className='bg-slate-200'>
            <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
                <div className='grid gap-8 md:grid-cols-2'>
                    <ImgGallery images={data.image} />
                    <div className='md:py-8'>
                        <div className='mb-2 md:mb-3'>
                            <span className='mb-0.5 inline-block capitalize text-slate-800'>{data.categoryName}</span>
                            <h2 className='font-bold text-2xl text-slate-950'>{data.name}</h2>
                        </div>
                        <div className='mb-6 flex items-center  gap-3 md:mb-10'>
                            <Button className='rounded-full bg-blue-700 p-2 text-white  gap-x-2'>
                                <span className='text-sm'>4.2</span><Star className='h-5 w-5' />

                            </Button>

                        </div>
                        <div className='mb-4'>
                            <div className='flex items-end gap-2'>
                                <span className='text-xl font-bold text-slate-800'>${data.price}</span>
                                <span className='mb-0.5 line line-through text-red-600 text-sm'>${data.price +30}</span>
                            </div>
                            <span className='text-sm text-slate-400'>incl. val plus shipping</span>
                        </div>
                        <div className='mb-6 flex items-center gap-2 text-slate-500'>
                            <Truck className='h-6 w-6'/>
                            <span className='text-sm '>2-4 day shipping</span>
                        </div>
                        <div className='gap-2.5 flex'>
                            <AddToCart currency='USD' price={data.price} name={data.name} image={data.image[0]} description={data.description} price_id={data.price_id} />
                            <Button variant={'outline'} className='text-black hover:bg-blue-400 hover:text-white '>Checkout Now</Button>
                            
                            

                        </div>
                        <p className='mt-12 text-base tracking-wider text-slate-500'>{data.description}</p>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductPage;
