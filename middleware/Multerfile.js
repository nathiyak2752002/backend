import multer from "multer";
const Storage=multer.diskStorage({
    filename:function(req,file,callback)
    {
        return callback(null,file.originalname)
    }
})
const upload=multer({Storage});
export default upload;