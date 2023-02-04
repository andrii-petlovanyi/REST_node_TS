import { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import { inject, injectable } from 'inversify';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error.class';
import 'reflect-metadata';
import { IUserController } from './users.controller.interface';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([
			{ path: '/login', method: 'post', func: this.login },
			{ path: '/register', method: 'post', func: this.register },
			{ path: '/current', method: 'get', func: this.current },
		]);
	}

	login(req: Request, res: Response, next: NextFunction): void {
		next(new HTTPError(401, 'Error authorization', 'login'));
		// this.ok(res, 'login')
	}

	register(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'register');
	}

	current(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'current user');
	}
}