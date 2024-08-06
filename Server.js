import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import 'dotenv/config.js'
import { AllFiles } from './config/Envfiles.js';
import ConnectDataBase from './middleware/DBConnect.js';
import app_router from './routing/Routing.js';
import schedule from 'node-schedule'
import multer from "multer";
import path from 'path'; 
const app=express();
ConnectDataBase()
app.use(express.json());
app.use(cors({credentials:true,origin:["http://localhost:5173"]}))
app.use(morgan("dev"));

app.get("/",(req,res)=>{
    res.send("Backend Working Bro Cool")
})



app.use("/api/",app_router)


app.listen(AllFiles.port,()=>{
    console.log(`Port Running http://localhost:${process.env.PORT}`)
})



