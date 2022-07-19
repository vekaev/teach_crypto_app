import delay from '../delay';

describe('delay', () => {
  it('should be correctly delayed', async () => {
    const start = Date.now();
    await delay(() => 10, 1000);
    const end = Date.now();
    expect(end - start).toBeGreaterThan(1000);
  });

  it('should return correct value in delay', async () => {
    const data = await delay(() => 10, 1000);
    expect(data).toBe(10);
  });
});
