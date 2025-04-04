import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    res.status(500).json({ status: 'error', message: error.message });
};
