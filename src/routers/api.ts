/**
 * Developer API
 * - Users
 * - Resources
 */

import { Router, Request, Response, NextFunction } from 'express';
import { findFromToken, users } from '../auth';
import { data } from '../data';

const RouterApi = Router();

function buildUserRouter() {
	const RouterUser = Router();

	return RouterUser;
}
function buildResourceRouter() {
	const RouterResource = Router();

	return RouterResource;
}

/**
 * Token authentication middleware
 */
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const user = findFromToken(req.headers.authorization ?? '');
	(user && user.admin)
		? next()
		: res.sendStatus(401);
};

export const onStart = () => {
	RouterApi.use('/user', buildUserRouter());
	RouterApi.use('/resource', buildResourceRouter());

	return RouterApi;
};
