import { Router } from "express";
import image_router from "../controlls/ImageControll/index.js";
import post_router from "../controlls/PostControll/index.js";

const app_router=Router();


app_router.use("/image",image_router)


app_router.use("/post",post_router)




export default app_router;