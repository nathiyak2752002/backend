// register

import Auth_models from "../../models/Auth_models.js";
import bcrypt from 'bcrypt';
export const Register=async(req,res)=>{
    try {
        
        const {email,password,userRole,userName}=req.body;

        const findExistUser=await Auth_models.findOne({email});

        if(!findExistUser)
        {

            const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hashSync(password,salt)
const response=await Auth_models({
    email:email,
    password:hashedPassword,
    userRole:"enduser",
    userName:userName
})
await response.save();
res.status(201).json({message:"User Register Successfully",status:true,data:response})
        }
        else{
            res.status(404).json({message:"User already Exists",status:false})
        }
    } catch (error) {
        
    }
}

// login
// get user
// forgetpassword
// otpcheck