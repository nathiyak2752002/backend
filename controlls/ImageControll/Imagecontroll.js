// create

import Image_shema from "../../models/image/Image_shema.js"
export const ImageUploadCreae=async(req,res)=>{
    const {name,description}=req.body;

    try {
        const colors=["#FA5252","#CC5DE8","#5C7CFA","#339AF0","#20C997","#94D82D","#FCC419"];
        const randomNumber=Math.floor(Math.random()*colors?.length);
        const findColor=colors[randomNumber];
       const response=await Image_shema({
        name:name,
        image:req.file.path.slice(8),
        bg:findColor,
        description:description
       });
       await response.save();
       res.status(201).json({message:"Success",status:true,data:response})
    } catch (error) {

        console.log(error)
        // res.status(404).json({message:error,status:false})
    }
}

// get method

export const getMethodImages=async(req,res)=>{
    try {
       const response=await Image_shema.find({}).lean();
       res.status(200).json({message:"Success",status:true,data:response})
    } catch (error) {
        // res.status(404).json({message:"Failed",status:false})
    }
}