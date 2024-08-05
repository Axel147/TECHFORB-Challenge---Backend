import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { validateRegister } from "../middlewares/user.validator";

const router = Router()

router.get("/", UserController.getAll)

router.post("/", validateRegister, UserController.createUser)

export default router;