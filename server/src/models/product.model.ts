import {Schema , model , Document} from "mongoose";

export interface IProduct extends Document{
    productName : string;
    productStockQuantity : number;
    productCompany : Schema.Types.ObjectId;
    productCategory : Schema.Types.ObjectId;
    rating : number;
    productDescription : string;
    sales : number;
};


const productSchema = new Schema<IProduct>({
    productName : {
        type : String,
        required : [true,"product-name is required"]
    },
    productStockQuantity : {
        type : Number,
        min : 0,
        required : [true,"Stock quantity is required"]
    },
    productCompany : {
        type : Schema.Types.ObjectId,
        ref : "Company",
        required : [true,"product company is required"]
    },
    productCategory : {
        type : Schema.Types.ObjectId,
        ref : "Category",
        reqyured : [true,"category is required"]
    },
    rating : {
        type : Number,
        min : 0,
        max : 5
    },
    productDescription : {
        type : String,
        default : ""
    },
    sales : {
        type : Number,
        default : 0
    }
},{timestamps : true});

export const Product = model<IProduct>("Product",productSchema);