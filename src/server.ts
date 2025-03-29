import express, { Request, Response } from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { getEnvVar } from './utils/getEnvVar.ts';
import { errorHandler } from './middlewares/errors.ts';

export function startServer() {
    const app = express();
    const PORT = Number(getEnvVar<number>('PORT', 3000));

    app.use(express.json());
    app.use(cors());
    app.use(pino({ transport: { target: 'pino-pretty' } }));

    app.get('/', (req: Request, res: Response) => {
        res.status(200).json({
            status: 200,
            message: 'Succesfull request',
        });
    });

    app.use((req: Request, res: Response) => {
        res.status(404).json({ message: 'Page not found!' });
    });

    app.use(errorHandler);

    app.listen(PORT, () => {
        console.log('Server started');
    });
}
