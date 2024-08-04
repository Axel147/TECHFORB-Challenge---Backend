import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user.model";

export class UserController{
    static getAll = async (req, res) => {
        console.log("entro al controller")
        const userRepository = new UserRepository(User);
        try {
            const user = await userRepository.findAll();
            res.status(200).json(user)
        } catch(error) {
            res.status(500).json({ error });
        }
    }
}