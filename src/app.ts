import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';
import createConnection from './database';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { AppError } from './errors/AppError';
import { router } from './router';

createConnection();
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(router);
app.use(
    (err: Error, request: Request, response: Response, _next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message
            });
        }

        return response.status(500).json({
            status: 'Error',
            message: `Internal server error ${err.message}`
        });
    }
);
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
  })

export { app };

