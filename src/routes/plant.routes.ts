import { Router } from "express";
import { PlantController } from "../controllers/plant.controller";
//import { validateRegister } from "../middlewares/plant.validator";

const router = Router()

router.get("/", PlantController.getAll)
router.get("/total/:field", PlantController.totalFieldSum)

router.post("/", /*validateRegister,*/ PlantController.createPlant)

router.patch("/delete/:id", PlantController.deletePlant)
router.put("/update/:id", PlantController.updatePlant)

export default router;