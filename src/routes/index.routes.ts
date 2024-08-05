import { Router } from "express";
import user from "./user.routes";
import auth from "./auth.routes";
import plant from "./plant.routes";

const routes = Router();

routes.use("/user", user);
routes.use("/auth", auth);
routes.use("/plant", plant);

export default routes;