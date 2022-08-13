import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response): void => {
    res.send('Initialization Version of Image Processing API Project');
});

app.listen(port, (): void => {
    console.log(`Open http://localhost:${port} to review the project`);
});

export default app;
