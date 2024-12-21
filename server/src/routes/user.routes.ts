import { Request, Router , Response} from "express";
import registerUser from "../controllers/user/register.user.controller";

const userRouter = Router();

userRouter.get("/",registerUser);

export default userRouter