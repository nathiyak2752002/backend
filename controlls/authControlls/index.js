import { Router } from "express";
import { Register } from "./AuthControll.js";

const auth_router=Router();

auth_router.post("/register",Register)


export default auth_router;