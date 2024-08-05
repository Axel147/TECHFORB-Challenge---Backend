import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateResult = (req: Request, res: Response, next: NextFunction) => {
	try {
		validationResult(req).throw();
		return next();
	} catch (error) {
		return res.status(403).json({ error });
	}
};