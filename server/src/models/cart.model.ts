import { Schema , Document , model } from "mongoose";

export interface ICart extends Document {
    userId : string;
    products : {
        productId : string;
        quantity : number;
    }[];
    total : number;
    createdAt : Date;
    updatedAt : Date;
}

const cartSchema = new Schema<ICart>({
    userId : {
        type : String,
        required : true
    },
    products : [
        {
            productId : {
                type : String,
                required : true
            },
            quantity : {
                type : Number,
                required : true
            }
        }
    ],
    total : {
        type : Number,
        required : true
    },
  
},{timestamps : true});

export const Cart = model<ICart>("Cart",cartSchema);