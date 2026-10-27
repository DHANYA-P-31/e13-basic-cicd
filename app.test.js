const request = require('supertest');
const app = require('./app');

describe('Application Tests', () => {
    test('Home page should return success message', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('CI/CD Pipeline Deployed Successfully');
    });

    test('Health endpoint should return OK', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('OK');
    });
});
