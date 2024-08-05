import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
//import { checkJwt } from "../middlewares/jwt";
//import { validateLogin, validatePassword } from "../middlewares/users.validator";

const router = Router();

//login 
router.post("/login", /*validateLogin,*/ AuthController.login);

export default router;