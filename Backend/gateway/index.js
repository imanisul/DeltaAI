import express from 'express';
import dotenv from 'dotenv';
import proxy from 'express-http-proxy';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import protect from './middleware/auth.middleware.js';
import getCurrentUser from './controllers/user.controller.js';
import { proxyWithHeader } from './utils/proxywithHeader.js';
dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials:true
}));

app.use(morgan("dev"));

app.use(cookieParser());

app.use('/api/auth',proxy(process.env.AUTH_SERVICE));
app.use('/api/chat',protect,proxyWithHeader(process.env.CHAT_SERVICE));
app.use('/api/agent',protect,proxy(process.env.AGENT_SERVICE));

app.use('/api/me', protect, getCurrentUser)





app.get('/', (req, res) => {
    res.json({
        success: true,
        service: "Api GateWay",
        message: "Heyy i am running",
    })
})

app.listen(port, () => {
    console.log(`Gateway started at server ${port}`);
    
});

