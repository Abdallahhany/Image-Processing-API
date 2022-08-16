import express, { Request, Response } from 'express';
import imageRouter from './routes/image_routes';
import path from 'path';

const app = express();
const port = 3000;

app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.use('/api', imageRouter);

app.get('/', (req: Request, res: Response): void => {
    res.send('Initialization Version of Image Processing API Project');
});

app.listen(port, (): void => {
    console.log(`Open http://localhost:${port} to review the project`);
});

export default app;
