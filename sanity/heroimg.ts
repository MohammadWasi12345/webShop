// sanity/pet.ts

import { title } from "process";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'heroImg',
    type: 'document',
    title:'Two Hero Image',
    fields: [
        {
            name:'img1',
            type:'image',
            title:'First Img',
        },
        {
            name:'img2',
            type:'image',
            title:'Second Img',
        },
    ]
}