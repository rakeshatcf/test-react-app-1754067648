import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getHealth } from './api';

const server = setupServer(
  rest.get('/api/v1/health', (req, res, ctx) => {
    return res(ctx.json({ status: 'healthy' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('API Service', () => {
  test('health check returns status', async () => {
    const response = await getHealth();
    expect(response.status).toBe('healthy');
  });

  test('handles API errors gracefully', async () => {
    server.use(
      rest.get('/api/v1/health', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    await expect(getHealth()).rejects.toThrow('API Error');
  });
});