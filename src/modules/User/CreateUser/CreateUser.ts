import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

export enum Role{
  ADMIN = 'ADMIN',
  USER = 'USER'
}
interface ICreateUser {
  fullname: string,
  email: string,
  password: string,
  role: Role
}

export class CreateUser {
    async execute({ email, password, role, fullname }: ICreateUser) {

        const userExists = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: 'insensitive'
                }
            }
        })

        if (userExists) {
            throw new Error("User already exists")
        }

        const hashPassword = await hash(password, 10);
        
          const user = await prisma.user.create({
            data: {
                email,
                password: hashPassword,
                fullname,
                role: role
              },
          })


        return user;
    }
}
