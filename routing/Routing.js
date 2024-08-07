import { Router } from "express";
import image_router from "../controlls/ImageControll/index.js";
import auth_router from "../controlls/authControlls/index.js";

const app_router=Router();
app_router.use("/image",image_router)
// auth
app_router.use("/auth",auth_router);

export default app_router;