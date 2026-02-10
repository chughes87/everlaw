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
- ✅ **Prettier** for consistent code formatting
- ✅ **VS Code integration** with settings and debug configurations
- ✅ **EditorConfig** for cross-editor consistency
- ✅ **Comprehensive validation** script to check everything before committing

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
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is formatted
- `npm run typecheck` - Type-check without building
- `npm run validate` - Run all checks (typecheck, lint, format, test)
- `npm run clean` - Remove compiled files

## Code Quality

### Before Committing

Always run the validation script to ensure everything passes:

```bash
npm run validate
```

This runs:

1. TypeScript type checking
2. Prettier formatting checks
3. All unit tests

### Auto-fixing Issues

```bash
# Format all files
npm run format
```

### Manual Debugging

```bash
node --inspect-brk -r ts-node/register src/cli.ts sample.txt
```

Then open `chrome://inspect` in Chrome.

