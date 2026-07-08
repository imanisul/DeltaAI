import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

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

