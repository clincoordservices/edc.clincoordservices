
import fetch from 'node-fetch';

test('real fetch call', async () => {
  const res = await fetch('http://localhost:3000/api/dashboard/admin/login');
  const result = await res.json();
  expect(result.name).toBe('test');
});