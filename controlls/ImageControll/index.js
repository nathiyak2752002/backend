import {Router} from 'express'
import { checkToken, create } from './Imagecontroll.js';
import upload from '../../middleware/Multerfile.js';
const image_router=Router();
image_router.post("/create",upload.single("image"),create)
image_router.post("/check",checkToken)


export default image_router;