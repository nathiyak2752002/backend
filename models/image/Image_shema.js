import mongoose from "mongoose";
const Image_shema_model=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},
{
    timeseries:true
})
mongoose.models={}
export default mongoose.model("image",Image_shema_model);