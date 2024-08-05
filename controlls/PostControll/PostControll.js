// create

import Post_model from "../../models/Post_model.js"

export const Create=async(req,res)=>{

    console.log(req.body)
    try {
        const response=await Post_model({
            name:req.body.name,
            age:req.body.age
        });
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