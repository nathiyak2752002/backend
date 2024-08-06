// create

import Image_shema from "../../models/image/Image_shema.js"
export const ImageUploadCreae=async(req,res)=>{
    const {name}=req.body;
    try {
       const response=await Image_shema({
        name:name,
        image:req.file.path
       });
       await response.save();
       res.status(201).json({message:"Success",status:true,data:response})
    } catch (error) {
        res.status(404).json({message:"Failed",status:false})
    }
}