import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const images = async (req: Request, res: Response): Promise<void> => {
    const imageName = req.query['imageName'];
    const imageWidth = req.query['width'];
    const imageHeight = req.query['height'];

    // check if the url have no queries
    if (!imageName) {
        res.send('Input Image is missing');
        return;
    }

    //display the resized images in the thumb Folder
    const thumbedImagesPath = `${path.resolve(
        __dirname,
        `../../../assets/thumb/${imageName}.jpg`
    )}`;
    if (thumbedImagesPath) {
        //
    }

    // check that nothing is missing in the query
    if (!imageName || !imageWidth || !imageHeight) {
        res.status(400).send(
            'Please make sure that url contain image name and required width and height'
        );
        return;
    }
};

export default images;
