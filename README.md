# Interview Project - File Reader CLI (TypeScript)

A simple Node.js CLI tool for reading text files, written in TypeScript.

## Project Structure

```
interview-project/
├── src/
│   ├── cli.ts           # CLI entry point
│   └── fileReader.ts    # File reading logic
├── test/
│   └── fileReader.test.ts  # Unit tests
├── dist/                # Compiled JavaScript (generated)
├── sample.txt           # Sample file for testing
├── package.json
├── tsconfig.json        # TypeScript configuration
├── jest.config.js       # Jest configuration
└── README.md
```

## Setup

Install dependencies:

```bash
npm install
```

Build the TypeScript code:

```bash
npm run build
```

## Usage

### Development Mode (without building)

Run directly with ts-node:

```bash
npm run dev sample.txt
```

### Production Mode

Build first, then run:

```bash
npm run build
npm start sample.txt
# or
node dist/cli.js sample.txt
```

### Build with Watch Mode

Automatically recompile on file changes:

```bash
npm run build:watch
```

## Testing

Run tests once:

```bash
npm test
```

Run tests in watch mode (automatically re-runs when files change):

```bash
npm run test:watch
```

Run tests with coverage:

```bash
npm run test:coverage
```

## Features

- ✅ Written in TypeScript with full type safety
- ✅ Read text files from the command line
- ✅ Error handling for missing files
- ✅ Unit tests with Jest and ts-jest
- ✅ Watch mode for automatic test running
- ✅ Test coverage reporting
- ✅ Source maps for debugging
- ✅ Development mode with ts-node (no build required)

## Development

The project uses:
- **TypeScript** for type-safe code
- **ts-jest** for running TypeScript tests
- **ts-node** for running TypeScript directly in development
- **nodemon** for watching file changes

When you run `npm run test:watch`, nodemon will:
- Watch for changes in `src/` and `test/` directories
- Automatically re-run all tests when any `.ts` file changes

**Alternative: Use Jest's built-in watch mode**
```bash
npx jest --watch
```

## Scripts Reference

- `npm run build` - Compile TypeScript to JavaScript
- `npm run build:watch` - Compile with watch mode
- `npm run dev <file>` - Run CLI without building (development)
- `npm start <file>` - Run compiled CLI
- `npm test` - Run tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run clean` - Remove compiled files

## Next Steps

This boilerplate provides a solid foundation. You can extend it by:
- Adding more complex file processing logic
- Supporting different file formats
- Adding command-line options (using a library like `commander` or `yargs`)
- Implementing additional CLI features based on interview requirements
- Adding ESLint and Prettier for code quality
