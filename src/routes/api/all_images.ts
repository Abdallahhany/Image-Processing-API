import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const allImages = async (req: Request, res: Response): Promise<void> => {
    // display all original images
    const originalDirPath = `${path.resolve(
        __dirname,
        `../../../assets/full/`
    )}`;
    const images = fs.readdirSync(originalDirPath);
    let data = `<h1> Here is a list of available images (with full size) to use: </h1>`;
    images.forEach((image, i) => {
        data += `<h3>Image ${i + 1} - ${image}</h3>
        <img src="../assets/full/${image}" alt="image not found"/>`;
    });
    // fs.readFile(originalDirPath + '/' + images[0], function (err, data) {
    //     if (err) throw err; // Fail if the file can't be read.
    //     res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    //     res.end(data); // Send the file data to the browser.
    // });
    res.send(data);
};

export default allImages;
