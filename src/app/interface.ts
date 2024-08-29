export interface simplifiedProduct{
    _id:string,
    name:string,
    price:number,
    imageUrl:string,
    slug:string,
    categoryName:string,
}

export interface fullProduct{
    _id:string,
    name:string,
    price:number,
    image:string[],
    slug:string,
    categoryName:string,
    description:string,
    price_id:string,
}