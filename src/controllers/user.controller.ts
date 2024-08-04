import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user.model";

const bcrypt = require('bcrypt');

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
        const { name, lastname, email, password } = req.body;
        const userRepository = new UserRepository(User);
        const user = new User();
        try {
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            try {
                const hashedPassword = await bcrypt.hash(password, salt);
                try {
                    user.name = name,
                    user.lastname = lastname,
                    user.email = email,
                    user.password = hashedPassword,
                    await userRepository.create(user);
                    return res.status(201).json({message: "User created"});
                } catch (error){
                    return res.status(500).json(error);
                }
            } catch (error) {
                return res.status(500).json(error)
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    };

}