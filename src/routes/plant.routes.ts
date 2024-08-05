import { Router } from "express";
import { PlantController } from "../controllers/plant.controller";
import { checkJwt } from "../middlewares/jwt";
//import { validateRegister } from "../middlewares/plant.validator";

const router = Router()

router.get("/", PlantController.getAll)
router.get("/total/:field", PlantController.totalFieldSum)

router.post("/", /*validateRegister,*/ PlantController.createPlant)

router.patch("/delete/:id", /*checkJwt,*/ PlantController.deletePlant)
router.put("/update/:id", /*checkJwt,*/ PlantController.updatePlant)

export default router;