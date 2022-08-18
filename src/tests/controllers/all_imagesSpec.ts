import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Test response from all images route /api/allImages', (): void => {
    it('should response with 200', async () => {
        const response = await request.get('/api/allImages');
        expect(response.status).toBe(200);
    });
});
