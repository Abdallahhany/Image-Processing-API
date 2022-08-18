import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const allImages = async (req: Request, res: Response): Promise<void> => {
    // display all original images
    const originalDirPath = path.resolve(__dirname, `../../assets/full/`);
    const thumbedDirPath = path.resolve(__dirname, `../../assets/thumb/`);
    const fullImages = fs.readdirSync(originalDirPath);
    const thumbedImages = fs.readdirSync(thumbedDirPath);
    let data = `<h1> Here is a list of available images (with full size) to use: </h1>`;
    fullImages.forEach((image, i) => {
        data += `<h3>Image ${i + 1} - ${image}</h3>
        <img src="../assets/full/${image}" alt="image not found"/>
        <h4> Here are thumbed images related to orignal image</h4>`;
        thumbedImages.forEach((thumb) => {
            if (thumb.split('_')[0] == image.split('.')[0])
                data += `
                    <img src="../assets/thumb/${thumb}" alt="image not found"/>`;
        });
    });
    res.status(200).send(data);
};

export default allImages;
