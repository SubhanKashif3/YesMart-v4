import {Schema , model , Document} from "mongoose";

export interface IUser extends Document {
    firstName : string;
    lastName : string;
    phoneNumber : number;
    email? : string;
    password : string;
    refreshToken? : string;
};

const userSchema = new Schema<IUser>({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : false,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    refreshToken : {
        type : String,
        required : false
    }
});

export const User = model<IUser>("User" , userSchema);