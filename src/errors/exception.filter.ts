import { TYPES } from './../types';
import { ILogger } from './../logger/logger.interface';
import { inject, injectable } from 'inversify';
import { IExceptionFilter } from './exception.filter.interface';
import { NextFunction, Response, Request } from 'express';
import { HTTPError } from './http-error.class';
import 'reflect-metadata';

@injectable()
export class ExceptionFilter implements IExceptionFilter {
	constructor(@inject(TYPES.ILogger) private logger: ILogger) {}
	catch(err: Error | HTTPError, req: Request, res: Response, next: NextFunction): void {
		if (err instanceof HTTPError) {
			this.logger.error(`[${err.context}] | Error ${err.statusCode}: ${err.message}`);
			res.status(err.statusCode).json({ error: err.message });
		} else {
			this.logger.error(err.message);
			res.status(500).json({ error: err.message });
		}
	}
}
