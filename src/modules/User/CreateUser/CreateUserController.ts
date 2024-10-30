import {Request, Response} from "express";
import { CreateUser } from "./CreateUser";

export class CreateUserController{
    async handle(req: Request, res: Response){
        const { email, password, fullname, role }  = req.body;

        const createUser = new CreateUser();
        const result = await createUser.execute({
            email,
            fullname,
            role,
            password
        });
        
        return res.json(result);
    }
}