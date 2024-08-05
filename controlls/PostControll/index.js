import {Router} from 'express'
import { Create, GetData } from './PostControll.js';
const post_router=Router();

post_router.post("/create",Create)
post_router.get("/get",GetData)


export default post_router;