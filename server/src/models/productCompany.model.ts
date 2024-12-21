import {Schema , model , Document} from "mongoose"

export interface IProductCompany extends Document {
    name : string;
};

const productCompanySchema = new Schema<IProductCompany>({
    name : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    }
});


