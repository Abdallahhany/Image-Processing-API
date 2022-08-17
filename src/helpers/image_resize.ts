import sharp from 'sharp';
import fs from 'fs/promises';

interface ResizeImageInterface {
    width: number;
    height: number;
    fullImagePath: string;
    thumbedImagePath: string;
}

const resizeImage = async ({
    width,
    height,
    fullImagePath,
    thumbedImagePath,
}: ResizeImageInterface): Promise<Buffer> => {
    const fullImage: Buffer | null = await fs
        .readFile(fullImagePath)
        .catch(() => null);

    if (!fullImage) {
        return Promise.reject();
    }

    //resize the image
    const imageAfterResizing: Buffer | null = await sharp(fullImage)
        .resize(width, height)
        .toBuffer()
        .catch(() => null);

    if (!imageAfterResizing) {
        return Promise.reject();
    }

    //save it to thumb folder
    return fs
        .writeFile(thumbedImagePath, imageAfterResizing)
        .then(() => {
            return imageAfterResizing;
        })
        .catch(() => {
            return Promise.reject();
        });
};

export default resizeImage;
