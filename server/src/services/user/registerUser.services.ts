import { IUser, User } from "../../models/user.model";
import { generateTokens } from "../../utilities/generateTokens";
interface RegisterUserPayloadInterface{
    firstName : string;
    lastName? : string;
    username : string;
    phoneNumber : number;
    password : string;
}
type RegisterUserReturn = IUser | null | string;
export const registerUser = async (payload : RegisterUserPayloadInterface): Promise<RegisterUserReturn> => {
    const {
        firstName,
        lastName,
        username,
        phoneNumber,
        password
    } = payload
    try {
        const existedUser : IUser | null = await User.findOne({phoneNumber});

        if (existedUser){

        };

        const user = new User({
            firstName,
            lastName : lastName ? lastName : "",
            password,
            phoneNumber,
            username
        });
        await user.save();

        return user;



    } catch (error ) {
        const errorMessage = (error as Error);
        return errorMessage.message
    }
};