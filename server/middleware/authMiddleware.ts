import { User } from './../../common/types/User';
/** @format */

import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import findSecretKey from '../../common/helpers/findSecretKey';
const authMiddleware = (roles: string[]=[]): ((
	req: Request,
	res: Response,
	next: () => void
) => void) => {
	return (req: Request, res: Response, next: () => void) => {
		if (req.method === 'OPTIONS') {
			next();
		}
		try {
			const token = req.headers.authorization?.split(' ')[1];
			console.log(token);
			if (!token) {
				return res.status(403).json({ message: 'User not authorized' });
			}

			const secretKey = findSecretKey();

            const decodedData: any = verify(token, secretKey);
            if (roles.length) {
				const { roles: userRoles } = decodedData;
				let hasRole = false;
				// @ts-ignore
				userRoles.forEach((role) => {
					if (roles.includes(role)) {
						hasRole = true;
					}
                });
                if (!hasRole) {
                    return res
						.status(403)
						.json({ message: 'You do not have access' });
                }
			}
            req.body = { ...req.body, user: decodedData };
			next();
		} catch (error) {
			console.log(error);
			return res.status(403).json({ message: 'User not authorized' });
		}
	};
};
export default authMiddleware;
