import express, { Router } from 'express';
import images from '../controllers/images';
import allImages from '../controllers/all_images';

const imageRouter: Router = express.Router();

imageRouter.get('/images', images);

imageRouter.get('/allImages', allImages);

export default imageRouter;
