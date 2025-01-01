import {Schema , model , Document} from "mongoose";
import { categories } from "../constants/categoriesArray";

export interface ICategory extends Document{
    categoryName : string;
};

const categorySchema = new Schema<ICategory>({
    categoryName : {
        type : String,
        enum : categories,
        unique : true,
        required : [true,"categoryName is required"]
    }
},{timestamps : true});

export const Category = model<ICategory>("Category",categorySchema);