import { Request, Response } from 'express';
import * as config from '../config/config';
import { UserRepository } from '../repositories/user.repository';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export class AuthController {
	
    static login = async (req: Request, res: Response) => {
		const userRepository = new UserRepository();
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ message: 'Username & Password are required' });
		}
		try {
			const user = await userRepository.findUserByEmail(email)
			if(user){
				if(bcrypt.compareSync(password, user.password)){
					const token = jwt.sign(
						{ 	id: user.id, 
							name: user.name, 
							lastname: user.lastname,
							email: user.email
						},
						config.JWT_SECRET,
						{ expiresIn: '1d' }
					);			
					res.status(200).json({ 
						"name":user.name,
						"lastname":user.lastname,
						"email":user.email,
						"token": token
					});
				}else{
					return res.status(400).json({ message: "Password incorrect" })
				}
			}else{
				return res.status(400).json({ message: "User incorrect" })
			}
        } catch (error) {
			return res.status(400).json({ message: error });
		}
	};
}