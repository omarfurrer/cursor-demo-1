# TypeScript Project

This is a bare-bones TypeScript project set up with basic configuration. It includes a simple structure for working with TypeScript, along with some helper functions for database queries.

## Project Structure

- `src/`: Contains the TypeScript source files
  - `main.ts`: Main entry point of the application
  - `helpers/`: Helper functions
    - `executeQuery.ts`: Function to execute multiple Cypher queries in parallel
    - `replaceQueryParam.ts`: Function to replace query parameters in Cypher queries
- `dist/`: Output directory for compiled JavaScript files
- `package.json`: Project configuration and dependencies
- `tsconfig.json`: TypeScript compiler options

## Prerequisites

- Node.js (version 12 or higher recommended)
- npm (usually comes with Node.js)

## Getting Started

### Standard Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd typescript-project
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the project:
   ```
   npm run build
   ```

4. Run the compiled JavaScript:
   ```
   npm start
   ```

5. Use `npm run clean` to remove compiled files

### Using Docker

You can also run this project using Docker:

1. Make sure you have Docker installed on your system
2. Build the Docker image:
   ```
   docker build -t typescript-project .
   ```
3. Run the container:
   ```
   docker run -it --rm typescript-project
   ```

This will build and run the project inside a Docker container, isolating it from your local environment.

## Available Scripts

- `npm run build`: Compile TypeScript to JavaScript
- `npm start`: Run the compiled JavaScript
- `npm run clean`: Remove the compiled files in the `dist/` directory
- `npm run dev`: Run the TypeScript code directly using ts-node (useful for development)

## Development

For development, you can use the `npm run dev` command, which uses `ts-node` to run the TypeScript code directly without the need for compilation.

## Project Configuration

- TypeScript is configured to use ES2020 features and CommonJS modules.
- The `strict` mode is enabled for better type checking.
- Output files are placed in the `dist/` directory.
- Source files are expected to be in the `src/` directory.

## Helper Functions

The project includes two helper functions:

1. `executeQuery`: Executes multiple Cypher queries in parallel.
2. `replaceQueryParam`: Replaces query parameters in Cypher queries.

For more details on these functions, refer to their respective files in the `src/helpers/` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).