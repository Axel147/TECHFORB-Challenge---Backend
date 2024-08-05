import { Router } from "express";
import { PlantController } from "../controllers/plant.controller";
//import { validateRegister } from "../middlewares/plant.validator";

const router = Router()

router.get("/", PlantController.getAll)

router.post("/", /*validateRegister,*/ PlantController.createPlant)

export default router;