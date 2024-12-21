import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "../routes/user.routes";

const app : Application = express();

app.use(cors({
    origin : ["http://localhost:5173"],
    credentials : true
}));

app.use(cookieParser());
app.use(express.json({limit : "13gb"}))
app.use(express.urlencoded({extended : true}));

app.use("/api/user", userRouter);


export {app};
