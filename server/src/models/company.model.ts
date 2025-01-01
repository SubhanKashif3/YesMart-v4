import { Document, Schema , model } from "mongoose";

export interface ICompany{
    companyName: string;
};

const companySchema = new Schema<ICompany>({
    companyName : {
        type : String,
        lowercase : true,
        trim : true,
        required : [true,"company name is required"]
    }
},{timestamps : true});

export const Company = model<ICompany>("Company",companySchema);