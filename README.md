# Interview Project - File Reader CLI

A simple Node.js CLI tool for reading text files.

## Project Structure

```
interview-project/
├── src/
│   ├── cli.js           # CLI entry point
│   └── fileReader.js    # File reading logic
├── test/
│   └── fileReader.test.js  # Unit tests
├── sample.txt           # Sample file for testing
├── package.json
├── jest.config.js
└── README.md
```

## Setup

Install dependencies:

```bash
npm install
```

## Usage

Run the CLI to read a file:

```bash
npm start sample.txt
# or
node src/cli.js sample.txt
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

- ✅ Read text files from the command line
- ✅ Error handling for missing files
- ✅ Unit tests with Jest
- ✅ Watch mode for automatic test running
- ✅ Test coverage reporting

## Development

The project uses Jest for testing with watch mode enabled. When you run `npm run test:watch`, Jest will:
- Automatically re-run tests when files in `src/` or `test/` change
- Show which tests are related to changed files
- Provide an interactive menu for filtering tests

## Next Steps

This boilerplate provides a solid foundation. You can extend it by:
- Adding more complex file processing logic
- Supporting different file formats
- Adding command-line options (using a library like `commander` or `yargs`)
- Implementing additional CLI features based on interview requirements
