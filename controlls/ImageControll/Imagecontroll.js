import fs from 'fs';
import schedule  from 'node-schedule'
import jwt from 'jsonwebtoken'; 
import csv from 'csvtojson';
let refreshToken;


const refreshTokenFunction=async(params,res)=>{
    try {
        const token=await jwt.sign({id:params},"12345",{expiresIn:"30s"})
        res.send({
            refreshToken:token
        })
       
    } catch (error) {
        
    }
}


// create
// export const create=async(req,res)=>{
//     try {
//         console.log(req.file.buffer.toString());

//         csv().fromFile(req.file.buffer).then((res)=>{
//          for(let i=0;i<res?.length;i++)
//          {
//             console.log(i)
//          }
//         }).catch((err)=>{
//             console.log(err);
//         })
//         // fs.writeFileSync("kalai.txt","welcome to New Developer")
// // const result=fs.readFileSync("kalai.txt","utf8")
// // console.log(result);
// // fs.unlinkSync("kalai.txt")
// // fs.writeFileSync("kalai.txt","welcome")
// // fs.appendFileSync("kalai.txt","update Text Value kalai to dilip")
// // const result=fs.readFileSync("kalai.txt");
// // console.log(result.toString())
// const token=await jwt.sign({id:"kalai"},"12345",{expiresIn:"30s"})

// const data={
//     token:token,
//     refreshToken:refreshToken?refreshToken:""
// }
// res.send(data)
//     } catch (error) {
        
//     }
// }

export const create = async (req, res) => {
    try {
        // Log the file buffer as a string to check its content
        // console.log(req.file.buffer.toString());

        // const formData=[];
        // // Convert CSV file buffer to JSON
        // const jsonArray = await csv().fromString(req.file.buffer.toString());
        // console.log(jsonArray);
        // jsonArray?.forEach((item,index)=>{
        //     const data={
        //         Name:item?.Industry || item?.Name
        //     }
        //     formData.push(data);
        // })

        // res.send(formData)
        // Example file operations with fs module
        // fs.writeFileSync("kalai.txt", "welcome to New Developer");
        // const result = fs.readFileSync("kalai.txt", "utf8");
        // console.log(result);
        // fs.unlinkSync("kalai.txt");
        // fs.writeFileSync("kalai.txt", "welcome");
        // fs.appendFileSync("kalai.txt", "update Text Value kalai to dilip");
        // const result = fs.readFileSync("kalai.txt");
        // console.log(result.toString());

        // Generate JWT token
        const token = await jwt.sign({ id: "kalai" }, "12345", { expiresIn: "30s" });
        const refreshToken = ''; // Add your logic to generate refreshToken if necessary

        const data = {
            token: token,
            refreshToken: refreshToken
        };

        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "An error occurred" });
    }
};

// schedule.scheduleJob('*/2 * * * * *',()=>{
//     console.log("kalaisuryas")
// })


export const checkToken=async(req,res)=>{
    try {
        await jwt.verify(req.body.token,"12345",(err,decode)=>{
if(err) {
     refreshTokenFunction("kalai",res)
    // return res.send(err)
}
if(decode)
{
    // console.log(decode?.id)
    res.send(decode.id)
}
        })
    } catch (error) {
        res.send("Invalid Token")
    }
}