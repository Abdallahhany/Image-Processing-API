import resizeImage from '../../helpers/image_resize';
import path from 'path';

const fullImagePath = path.resolve(
    __dirname,
    `../../../assets/full/encenadaport.jpg`
);

const thumbedImagePath = path.resolve(
    __dirname,
    `../../../assets/thumb/encenadaport_100_100.jpg`
);

describe('image resize helper method', () => {
    it('should return a Buffer', async () => {
        const image = await resizeImage({
            width: 100,
            height: 100,
            fullImagePath,
            thumbedImagePath,
        });
        expect(image).toBeInstanceOf(Buffer);
    });
});
