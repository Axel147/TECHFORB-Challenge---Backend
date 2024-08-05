import { Router } from "express";
import user from "./user.routes";
import auth from "./auth.routes";

const routes = Router();

routes.use("/user", user);
routes.use("/auth", auth)

export default routes;