import {Router} from 'express'
// import { checkToken, create } from './Imagecontroll.js';
import upload from '../../middleware/Multerfile.js';
import { getMethodImages, ImageUploadCreae } from './Imagecontroll.js';
// import { upload } from '../../Server.js';
const image_router=Router();
image_router.post("/create",upload.single("image"),ImageUploadCreae)
image_router.get("/get",getMethodImages)


export default image_router;