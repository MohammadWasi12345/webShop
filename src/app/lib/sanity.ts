import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId:'hp3war5t',
    apiVersion:'2024-05-20',
    dataset:'production',
    useCdn:true,

});

export const builder = imageUrlBuilder(client) ;

export function urlFor(source:any){
  return builder.image(source);
}