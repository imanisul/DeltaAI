import express from 'express';
import dotenv from 'dotenv';
import proxy from 'express-http-proxy';
import cors from 'cors';
dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use('/auth',proxy(process.env.AUTH_SERVICE));



app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials:true
}))

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

