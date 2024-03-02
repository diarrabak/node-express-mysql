import { Router } from "express";
import { login } from "../authentification/loginController.js";

const router = Router()

router.post('/', login)

export default router