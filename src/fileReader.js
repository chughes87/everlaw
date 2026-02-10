const fs = require('fs').promises;

/**
 * Reads a text file and returns its contents
 * @param {string} filepath - Path to the file to read
 * @returns {Promise<string>} The file contents
 */
async function readFile(filepath) {
  try {
    const content = await fs.readFile(filepath, 'utf-8');
    return content;
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`File not found: ${filepath}`);
    }
    throw error;
  }
}

module.exports = {
  readFile
};
