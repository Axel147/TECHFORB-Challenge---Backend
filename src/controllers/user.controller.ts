import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user.model";

export class UserController{
    static getAll = async (req: Request, res: Response ) => {
        const userRepository = new UserRepository(User);
        try {
            const user = await userRepository.findAll();
            res.status(200).json(user)
        } catch(error) {
            res.status(500).json({ error });
        }
    }

    static createUser = async (req: Request, res: Response) => {
        console.log("antes de desestructurar");
        const { name, lastname, email, password } = req.body;
        console.log("despues de desestructurar");
        const userRepository = new UserRepository(User);
        const user = new User();
        try {
            user.name = name,
            user.lastname = lastname,
            user.email = email,
            user.password = password,
            console.log(user.name, " ", user.lastname, " ", user.email, " ", user.password, " ")
            await userRepository.create(user);
            return res.status(201).json({message: "User created"});
        } catch (error){
            return res.status(500).json(error);
        }
    };

}