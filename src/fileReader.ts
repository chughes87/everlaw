import { promises as fs } from "fs";

/**
 * Reads a text file and returns its contents
 * @param filepath - Path to the file to read
 * @returns The file contents
 * @throws Error if file is not found or cannot be read
 */
export async function readFile(filepath: string): Promise<string> {
  try {
    const content = await fs.readFile(filepath, "utf-8");
    return content;
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      throw new Error(`File not found: ${filepath}`);
    }
    throw error;
  }
}
