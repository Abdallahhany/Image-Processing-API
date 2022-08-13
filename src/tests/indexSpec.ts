import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test respose from default endpoint: /', (): void => {
    it('Should response with 200', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
});
