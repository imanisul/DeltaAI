import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import authRouter from './routes/auth.route.js';
dotenv.config();

const port = process.env.PORT || 8001;

const app = express();

app.use(express.json())





app.use('/', authRouter)

app.listen(port, () => {
    console.log(`Auth service is running at ${port}`);

    connectDB();
    
});