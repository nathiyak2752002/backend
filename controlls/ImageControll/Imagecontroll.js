import fs from 'fs';

// create
export const create=async(req,res)=>{
    try {
        console.log(req.file.originalname);
        // fs.writeFileSync("kalai.txt","welcome to New Developer")
const result=fs.readFileSync("kalai.txt","utf8")
console.log(result);
    } catch (error) {
        
    }
}