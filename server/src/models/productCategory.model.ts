import {Document , Schema , model} from "mongoose";

export interface IProductCategory extends Document {
    categoryName : string;
};

const productCategorySchema = new Schema<IProductCategory>({
    categoryName : {
        type : String,
        enum : ["test1","test2"]
    }
});

