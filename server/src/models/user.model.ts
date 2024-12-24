import {Document , Schema , model} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_EXPIRY, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_EXPIRY, REFRESH_TOKEN_SECRET } from "../constants/envConstants";
export interface IUser extends Document{
    firstName : string;
    lastName? : string;
    username : string;
    phoneNumber : number;
    email? : string;
    password : string;
    refreshToken : string;
    generateAccessToken : () => string;
    generateRefreshToken : () => string;
};

const userSchema = new Schema<IUser>({
    firstName : {
        type : String,
        required : [true,"firstname is required"]
    },
    lastName : {
        type : String,
        required : [true,"lastname is required"]
    },
    username : {
        type : String,
        required : [true,"username is required"],
        lowercase : true,
        trim : true,
        unique : true
    },

    email : {
        type : String,
        unique : true,
        lowercase : true,
        trim : true
    },

    phoneNumber : {
        type : Number,
        min : 10,
        max : 11,
        required : [true,"Phone number is required"]
    },

    password : {
        type : String,
        min : 8,
        required : [true,"password is required"]
    },
    refreshToken : String
    
},{timestamps : true});


userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id
        },
        ACCESS_TOKEN_SECRET,
        {
            expiresIn : ACCESS_TOKEN_EXPIRY
        }
    )
};



userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id : this._id
        },
        REFRESH_TOKEN_SECRET,
        {
            expiresIn : REFRESH_TOKEN_EXPIRY
        }
    )
};

userSchema.pre("save", async function (next) {
    const user = this as IUser;

    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 10);
    }

    next();
});

export default model<IUser>("User",userSchema);
