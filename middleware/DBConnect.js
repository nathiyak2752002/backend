import mongoose from "mongoose";
import { AllFiles } from "../config/Envfiles.js";
const ConnectDataBase=async()=>{
    try {
        await mongoose.connect(AllFiles.url).then((res)=>{
            console.log("Backend Data Base Connected")
        });
    } catch (error) {
        
    }
}
export default ConnectDataBase;