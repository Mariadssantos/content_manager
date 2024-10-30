import { Router } from "express";
import { CreateUserController } from "../modules/User/CreateUser/CreateUserController";
import { ListUserController } from "../modules/User/GetUser/ListUserController";

const routes = Router();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();


routes.post("/user/", createUserController.handle);

routes.get("/user/", listUserController.handle);
routes.get("/user/:id", listUserController.handle);

export {routes};