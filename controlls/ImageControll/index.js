import {Router} from 'express'
import { create } from './Imagecontroll.js';
import upload from '../../middleware/Multerfile.js';
const image_router=Router();
image_router.post("/create",upload.single("image"),create)

export default image_router;