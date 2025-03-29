import express from 'express';

export function startServer() {
    const app = express();
    const PORT = 3000;

    app.get('/', (req, res) => {
        res.status(200).json({
            status: 200,
            message: 'Succesfull request',
        });
    });

    app.listen(PORT, () => {
        console.log('Server started');
    });
}
