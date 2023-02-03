import { NextFunction, Request, Response } from "express";

import { BaseController } from "../common/base.controller";
import { LoggerService } from "../logger/logger.service";

export class UserController extends BaseController {
    constructor(logger: LoggerService) {
        super(logger)
        this.bindRoutes([
            { path: '/login', method: 'post', func: this.login },
            { path: '/register', method: 'post', func: this.register },
            { path: '/current', method: 'get', func: this.current },

        ])
    }

    login(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'login')
    }

    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'register')
    }

    current(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'current user')
    }
}