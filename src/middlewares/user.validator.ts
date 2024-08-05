import { validateResult } from './validate.helper';
import { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';


export const validateRegister = [
	body('email')
		.exists()
		.withMessage('El email del usuario no fue ingresado')
		.not()
		.isEmpty()
		.withMessage('El email no puede estar vacio')
		.isEmail()
		.withMessage('El email debe tener el formato de un correo valido')
		.custom((value, { req }) => {
			let caracteres = 0;
			let caracteresMinimos = 4;
			for (let i = 0; i < value.length; i++) {
				if (value[i] !== '@') {
					caracteres++;
				} else {
					break;
				}
			}
			if (caracteres < caracteresMinimos)
				throw new Error(
					'El email debe contener al menos 4 caracteres antes del @'
				);
			return true;
		}),
	body('password')
		.exists()
		.withMessage('La contraseña del usuario no fue ingresado')
		.not()
		.isEmpty()
		.withMessage('La contraseña no puede no puede estar vacia')
		.isLength({ min: 8 })
		.withMessage('La contraseña debe componerse de al menos 8 caracteres')
		.custom((value, { req }) => {
			let cantMayusculas = 0;
			let cantMinusculas = 0;
			let cantNumeros = 0;
			for (let i = 0; i < value.length; i++) {
				if (
					(value[i].charCodeAt(0) >= 65 &&
						value[i].charCodeAt(0) <= 90) ||
					value[i].charCodeAt(0) == 165
				)
					cantMayusculas++;
				else if (
					(value[i].charCodeAt(0) >= 97 &&
						value[i].charCodeAt(0) <= 122) ||
					value[i].charCodeAt(0) == 164
				)
					cantMinusculas++;
				else if (
					value[i].charCodeAt(0) >= 48 &&
					value[i].charCodeAt(0) <= 57
				)
					cantNumeros++;
			}
			if (!(cantMayusculas > 0 && cantMinusculas > 0 && cantNumeros > 0))
				throw new Error(
					'La contraseña debe componerse de al menos una mayuscula, una minuscula y un numero'
				);
			return true;
		}),
	body('name')
		.exists()
		.withMessage('El nombre del usuario no fue ingresado')
		.not()
		.isEmpty()
		.withMessage('El nombre del usuario no puede estar vacio')
		.isString()
		.withMessage('El nombre del usuario debe ser una cadena de caracteres')
		.isLength({ min: 3 })
		.withMessage(
			'El nombre del usuario debe componerse de al menos 3 caracteres'
		)
		.custom((value, { req }) => {
			if (value.trim() == 0)
				throw new Error(
					'El nombre no puede componerse unicamente de espacios'
				);
			return true;
		}),
	body('lastname')
		.exists()
		.withMessage('El apellido del usuario no fue ingresado')
		.not()
		.isEmpty()
		.withMessage('El apellido del usuario no puede estar vacio')
		.isString()
		.withMessage(
			'El apellido del usuario debe ser una cadena de caracteres'
		)
		.isLength({ min: 3 })
		.withMessage(
			'El apellido del usuario debe componerse de al menos 3 caracteres'
		)
		.custom((value, { req }) => {
			if (value.trim() == 0)
				throw new Error(
					'El apellido no puede componerse unicamente de espacios'
				);
			return true;
		}),
	(req: Request, res: Response, next: NextFunction) => {
		validateResult(req, res, next);
	}
];