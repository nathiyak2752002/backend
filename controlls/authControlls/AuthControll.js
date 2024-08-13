// register

import Auth_models from "../../models/Auth_models.js";
import bcrypt from 'bcrypt';
import cron from 'node-cron';
export const Register=async(req,res)=>{
    try {
        
        const {email,password,userRole,userName}=req.body;

        const findExistUser=await Auth_models.findOne({email});

        if(findExistUser)
        {

            res.status(404).json({message:"User already Exists",status:false})
            
        }
        else{

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
    } catch (error) {
        res.status(404).json({message:"Server Error",status:false})
        
    }
}


function Mailsend()
{
    console.log("welcome to Hari and Vinu Love")
}



const filt=new Date();

console.log(filt.getDate(),filt.getMonth()+1)


try {

    if(filt.getDate()===13,filt.getMonth()+1===8)
    {
        console.log("kalai")
    cron.schedule('33 15 * * * ', Mailsend);

    }
} catch (error) {
    throw new Error(`Failed to schedule cron job: ${error.message}`);
}

// login
// get user
// forgetpassword
// otpcheck