import mongoose from "mongoose";
const auth_mongoose_shema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:4,
        max:8
    },
    userName:{
type:String,
required:false
    },
    userRole:{
        type:String,
        required:true,
        enum : ["admin","enduser"],
        default:"enduser"
    }
},
{
    timestamps:true
})
mongoose.models={};
export default mongoose.model("auth",auth_mongoose_shema);