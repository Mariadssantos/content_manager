import { Router } from "express";
import { CreateUserController } from "../modules/User/CreateUserController";

const routes = Router();
const createUserController = new CreateUserController();

routes.post("/user/", createUserController.handle);

export {routes};