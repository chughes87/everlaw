const { readFile } = require('../src/fileReader');
const fs = require('fs').promises;
const path = require('path');

describe('fileReader', () => {
  const testDir = path.join(__dirname, 'fixtures');
  const testFile = path.join(testDir, 'test.txt');

  beforeAll(async () => {
    await fs.mkdir(testDir, { recursive: true });
  });

  afterAll(async () => {
    await fs.rm(testDir, { recursive: true, force: true });
  });

  beforeEach(async () => {
    await fs.writeFile(testFile, 'Hello, World!', 'utf-8');
  });

  afterEach(async () => {
    try {
      await fs.unlink(testFile);
    } catch (error) {
      // File might not exist, ignore
    }
  });

  test('should read file contents successfully', async () => {
    const content = await readFile(testFile);
    expect(content).toBe('Hello, World!');
  });

  test('should handle multi-line content', async () => {
    const multilineContent = 'Line 1\nLine 2\nLine 3';
    await fs.writeFile(testFile, multilineContent, 'utf-8');

    const content = await readFile(testFile);
    expect(content).toBe(multilineContent);
  });

  test('should throw error for non-existent file', async () => {
    await expect(readFile('nonexistent.txt'))
      .rejects
      .toThrow('File not found: nonexistent.txt');
  });

  test('should handle empty files', async () => {
    await fs.writeFile(testFile, '', 'utf-8');

    const content = await readFile(testFile);
    expect(content).toBe('');
  });
});
