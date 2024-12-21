import { Request, Response } from "express";
import { ResponseStream } from "json-response-sender";

interface RegisterUserRequestBody{
    firstName : string;
    lastName : string;
    phoneNumber : number;
    password : string;
}

const registerUser = async (req : Request , res : Response) => {    
    const response = new ResponseStream(res);
    try {
        const {
            firstName,
            lastName,
            phoneNumber,
            password
        }: RegisterUserRequestBody = req.body;


        console.log();
        
    } catch (error) {
        
    }
};

export default registerUser