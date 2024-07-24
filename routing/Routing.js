import { Router } from "express";
import image_router from "../controlls/ImageControll/index.js";

const app_router=Router();


app_router.use("/image",image_router)



export default app_router;