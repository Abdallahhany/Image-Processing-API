import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import resizeImage from '../helpers/image_resize';

const images = async (req: Request, res: Response): Promise<void> => {
    const imageName = req.query['imageName'];
    const height = req.query['height']
        ? parseInt(req.query['height'] as string)
        : null;
    const width = req.query['width']
        ? parseInt(req.query['width'] as string)
        : null;

    // Make sure that image name is correct
    if (!imageName) {
        res.status(400).send(
            'Please make sure that You Provide the correct Name for the required image'
        );
        return;
    }
    // make sure that image height and width are numbers and greater than zero
    if (!width || !height || width <= 0 || height <= 0) {
        res.status(400).send(
            'Please make sure that You Provide the correct width and height for the image'
        );
        return;
    }
    const fullImagePath = path.resolve(
        __dirname,
        `../../assets/full/${imageName}.jpg`
    );

    // check the existence of the full image
    const ifFullImageExist = fs.existsSync(fullImagePath);

    if (!ifFullImageExist) {
        res.status(404).send(
            'Image Not Found Make sure that you write the name correctly'
        );
        return;
    }

    const thumbedImagePath = path.resolve(
        __dirname,
        `../../assets/thumb/${imageName}_${height}_${width}.jpg`
    );

    // check the existence of thumbed image
    const isThumbedImageExist = fs.existsSync(thumbedImagePath);

    // if found we will send it without doing any operations on it
    if (isThumbedImageExist) {
        res.status(200).sendFile(thumbedImagePath);
        return;
    }
    // if not found we will resize it
    resizeImage({
        width,
        height,
        fullImagePath,
        thumbedImagePath,
    })
        .then((resizedImage: Buffer) => {
            return res.status(200).contentType('jpg').send(resizedImage);
        })
        .catch((e) => {
            console.log(e);
            return res
                .status(500)
                .send('An error has occurred while processing the image');
        });
};

export default images;
