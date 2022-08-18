import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Test response from images route /api/images', (): void => {
    it('should response with 400 if query is not compelet', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(400);
    });
    it('should response with 400 if query is not compelet', async () => {
        const response = await request.get('/api/images?width=100&height=150'); // image name is missing
        expect(response.status).toBe(400);
    });
    it('should response with 400 if query is not compelet', async () => {
        const response = await request.get(
            '/api/images?imageName=fjord&height=150' // image width is missing
        );
        expect(response.status).toBe(400);
    });
    it('should response with 400 if query is not compelet', async () => {
        const response = await request.get(
            '/api/images?imageName=fjord&width=150' // image height is missing
        );
        expect(response.status).toBe(400);
    });

    it('should response with 404 if image not found', async () => {
        const response = await request.get(
            '/api/images?imageName=fdjord&width=100&height=150' // image name is not correct so that image not found
        );
        expect(response.status).toBe(404);
    });
});
