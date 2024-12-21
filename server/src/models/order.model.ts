import {Schema , model , Document} from "mongoose";
import {IProduct} from "./product.model";

export interface IOrder extends Document {
    orderItems : IProduct[];
    shippingAddress : string;

    totalPrice : number;
    isDelivered : boolean;
    deliveredAt : Date;
    isPaid : boolean;
    paidAt : Date;
    user : Schema.Types.ObjectId;
    createdAt : Date;
    updatedAt : Date;
}


const orderSchema = new Schema<IOrder>({
    orderItems : [
        {
            type : Schema.Types.ObjectId,
            ref : "Product",
            required : true
        }
    ],
    shippingAddress : {
        type : String,
        required : true
    },
    totalPrice : {
        type : Number,
        required : true
    }, 
    isDelivered : {
        type : Boolean,
        required : true,
        default : false
    },
    deliveredAt : {
        type : Date,
        required : false
    },
    isPaid : {
        type : Boolean,
        required : true,
        default : false
    },
    paidAt : {
        type : Date,
        required : false
    },
    user : {
        type : Schema.Types.ObjectId,           
        ref : "User",
        required : true
    }
});