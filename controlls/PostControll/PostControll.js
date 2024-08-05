// create

import Post_model from "../../models/Post_model.js"

export const Create=async(req,res)=>{
    try {
        const response=await Post_model(req.body);
        await response.save();
        res.status(201).json({message:"Success",status:true,data:response})
    } catch (error) {
        res.status(404).json({message:"Falied",status:false})
        
    }
}

export const GetData=async(req,res)=>{
    try {
        const response=await Post_model.find({}).lean();
        res.status(200).json({message:"Success",status:true,data:response})
    } catch (error) {
        res.status(404).json({message:"Falied",status:false})
        
    }
}