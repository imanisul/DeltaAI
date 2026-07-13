import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import conversationRouter from "./routes/chat.route.js";

dotenv.config();

const port = process.env.PORT || 8002;

const app = express();

app.use(express.json())

app.use('/api', conversationRouter)






app.listen(port, () => {
    console.log(`Chat service is running at ${port}`);

    connectDB();
    
});