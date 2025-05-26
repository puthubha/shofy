export interface SignUpdata{
 name:string,
 email:string,
 password:string,
 checkbox:Boolean,
 role:string

}

export interface SignUpApidata{
    name:string,
    email:string,
    password:string,
    checkbox:Boolean,
    role:string,
    id:number
}

export interface LoginData{
    email:string,
    password:string,
    role:string
}

export interface ProductData{
    productName: string,
    productCategorie: string,
    productPrice: number,
    productDiscountPrice: number,
    productImage: number,
    _id: number
}
export interface contactApiData{
    id:Number,
    name:string,
    email:string,
    subject:string,
    message:string
}

export interface productCategorie{
    id:number,
    productCategorieName:string,
    productImage:string
}

export interface userListData{
    userId:Number,
    name:string,
    email:string,
    role:string,
}