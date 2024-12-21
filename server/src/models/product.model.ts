import {Document, Schema, model} from "mongoose";

export interface IProduct {
    productName : string;
    productCategory : Schema.Types.ObjectId;
    productCompany : Schema.Types.ObjectId
    productPrice : number;
    productDescription : string;
    productImage : string;
    productQuantity : number;
    productRating : number;
};

const productSchema = new Schema<IProduct>({
    productName : {
        type : String,
        required : true
    },
    productCategory : {
        type : Schema.Types.ObjectId,
        required : true
    },
    productCompany : {
        type : Schema.Types.ObjectId,
        required : true
    },
    productPrice : {
        type : Number,
        required : true
    },
    productDescription : {
        type : String,
        required : true
    }
});