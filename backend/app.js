import express from 'express';
import { dbConnect } from './database/dbConnect.js';
import 'dotenv/config';
const app = express();
app.use(express.json());
import bookRoute from '../backend/routes/bookRoute.js'
import { StatusCodes } from 'http-status-codes';
import cors from 'cors';

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}));

const start = async () => {
    try {
        await dbConnect(process.env.MONGO_URI);
        console.log("database connected...");
        app.listen(process.env.PORT || 3000, () => {
        console.log("server is running...");
    });
    } 
    catch (error) {
        console.log(error);
    }
}

start();
app.use(bookRoute)

app.get("*", (req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({
        msg: "Page N/A"
    })
})