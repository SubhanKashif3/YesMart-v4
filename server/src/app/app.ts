import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from "@apollo/server/express4"

const app : Application = express();
app.use(cors({
    origin : ["http://localhost:5173"],
    credentials : true
}));
app.use(cookieParser());

const apolloGraphQlServer = new ApolloServer({});

export {app , apolloGraphQlServer};
