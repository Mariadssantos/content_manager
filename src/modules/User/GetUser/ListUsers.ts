import { response } from "express";
import { prisma } from "../../../../database/prismaClient";
import { error } from "console";

interface IRequest {
    id: string
}

export class ListUsers {
    async execute({ id }: IRequest) {
        if (id) {
            const userExists = await prisma.user.findUnique({
                where: {
                    id: id,
                }
            })
            if (userExists) {
                return userExists
            } else {
                throw new Error("User not found.")
            }
        }
        else {
            const users = await prisma.user.findMany()
            return users
        }
    }
}
