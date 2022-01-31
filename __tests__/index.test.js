import { describe, expect, test } from '@jest/globals';
import makeRouter from '../index.js';

const routes = [
  {
    path: '/courses',
    handler: () => 'courses!',
  },
  {
    path: '/courses/basics',
    handler: () => 'basics',
  },
];

const router = makeRouter(routes);

describe('serve existed routes', () => {
  test('correct response', () => {
    const handler = router.serve('/courses');
    expect(handler()).toBe('courses!');
  });
});

describe('serve wrong routes', () => {
  test('throw error', () => {
    expect(() => router.serve('/404')).toThrow();
  });
});
