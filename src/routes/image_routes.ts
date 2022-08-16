import express, { Router } from 'express';
import images from './api/image_api';
import allImages from './api/all_images';

const imageRouter: Router = express.Router();

imageRouter.post('/images', images);

imageRouter.get('/allImages', allImages);

export default imageRouter;
