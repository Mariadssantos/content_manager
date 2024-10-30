import {Request, Response} from "express";
import { ListUsers } from "./ListUsers";

export class ListUserController{
    async handle(req: Request, res: Response){
        const { id } = req.params;

        const listUser = new ListUsers();

        const result = await listUser.execute({id});
        
        return res.json(result);
    }
}