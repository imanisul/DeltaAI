import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
dotenv.config();

const port = process.env.PORT || 8001;

const app = express();


app.get('/', (req, res) => {
    res.json({
        success: true,
        service: "Auth service is ruinnig",
        message: "Hey i am auth service"
    });
});

app.listen(port, () => {
    console.log(`Auth service is running at ${port}`);

    connectDB();
    
});