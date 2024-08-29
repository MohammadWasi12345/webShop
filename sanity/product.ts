// sanity/pet.ts

import { title } from "process";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name:'name',
            type:'string',
            title:'Name of Product',
        },
        {
            name:'image',
            type:'array',
            title:' Product Image',
            of:[{type:'image'}]
        },
        {
            name:'description',
            type:'text',
            title:'Description',
        },{
            name:'slug',
            type:'slug',
            title:' Product Slug',
            options:{
                source:'name',
            }
        },
        {
            name:'price',
            type:'number',
            title:'Price of Product',
        },
        {
            name:'price_id',
            type:'string',
            title:'Stripe Product ID',
        },
        
        
        {
            name:'category',
            type:'reference',
            title:' Product Category',
            to:[{type:'category'}]
        },
    ]
}