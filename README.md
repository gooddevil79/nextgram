# Nextgram

Nextgram is a modern web application that blends the features of Instagram and Twitter, providing users with an engaging platform for sharing photos, updates, and connecting with friends. Built with Next.js 14 and utilizing the app directory structure, this project emphasizes performance and user experience.

## Motivation

Nextgram is my personal project aimed at creating a seamless social media experience by blending the visual appeal of Instagram with the real-time communication features of Twitter. Through this project, I wanted to practice my skills in web development and explore the capabilities of Next.js and NextUI. Whether it's sharing moments through images or engaging in meaningful conversations, Nextgram is designed to enhance how users connect online while serving as a valuable exercise in building a robust application.

## Technologies Used

- **[Next.js 14](https://nextjs.org/docs/getting-started)**: A React framework for building fast, user-friendly applications.
- **[NextUI](https://nextui.org/)**: A powerful UI library that enables easy styling and components.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[SVGR](https://react-svgr.com/)**: Transform SVGs into React components for easy icon management.
- **[T3 Env](https://github.com/nextui-org/t3-env)**: Simplifies environment variable management.
- **[TypeScript](https://www.typescriptlang.org/)**: A statically typed programming language for enhanced development efficiency.
- **[Commit Lint](https://commitlint.js.org/)**: Enforces consistent commit message conventions.
- **[Cspell](https://github.com/streetsidesoftware/cspell)**: A spell checker for code.
- **[ESLint](https://eslint.org/)**: A tool for identifying and fixing problems in JavaScript code.

## Folder Structure

The project is organized into a clean and efficient folder structure for better maintainability and scalability:

```
src/
├── app/          # Application routes and pages
├── apis/         # API routes for handling data requests
├── components/   # Reusable components
├── config/       # Configuration files and settings
├── layout/       # Layout components for consistent styling
├── modules/      # Feature-specific modules
├── providers/    # Context and UI providers
├── styles/       # Global styles and Tailwind CSS configurations
├── types/        # General TypeScript type definitions
└── views/        # Page views
```

### APIs

The `apis` folder contains all API routes necessary for handling data requests, including:

- **User authentication and management**
- **Data fetching for posts and comments**

## How to Use

### Clone the Repository

To get started with the Nextgram template, clone the repository:

```bash
git clone https://github.com/yourusername/nextgram.git
cd nextgram
```

### Install Dependencies

Using `pnpm` as your package manager, install the necessary dependencies:

```bash
pnpm install
```

### Run the Development Server

Start the development server to see your application in action:

```bash
pnpm run dev
```

### Setup Commit Linting

Commit linting helps maintain a consistent commit message style that follows Angular's conventions. Here’s how to set it up:

1. **Install Commit Lint** (if not already included):

   ```bash
   pnpm add --dev @commitlint/{config-conventional,cli}
   ```

2. **Create a configuration file**:
   Create a `commitlint.config.js` file in the root of your project with the following content:

   ```javascript
   module.exports = {
     extends: ['@commitlint/config-conventional'],
   };
   ```

3. **Set up a commit-msg hook**:
   You can use Husky to enforce commit message linting. Install Husky if you haven’t already:

   ```bash
   pnpm add --dev husky
   ```

   Then, initialize Husky and add the hook:

   ```bash
   npx husky install
   npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
   ```

### Commit Message Guidelines

When committing changes, follow these Angular-style conventions:

- **Types**: The type of change that is being made. Example types include:

  - `feat`: A new feature
  - `fix`: A bug fix
  - `docs`: Documentation only changes
  - `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
  - `refactor`: A code change that neither fixes a bug nor adds a feature
  - `perf`: A code change that improves performance
  - `test`: Adding missing or correcting existing tests
  - `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

- **Format**: The commit message format should be:

  ```
  <type>(<scope>): <subject>

  <body>

  <footer>
  ```

#### Example Commit Messages

- **Feature**: `feat(posts): add functionality to create a new post`
- **Bug Fix**: `fix(auth): resolve login issue on mobile devices`
- **Documentation**: `docs(readme): update installation instructions`

For more detailed guidelines, visit the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit).

### Setup ESLint and Cspell

To ensure code quality and avoid spelling errors in your comments and documentation, run:

```bash
pnpm run lint
```

### Customize Your Environment

To configure environment-specific settings, copy the provided `.env.example` file to create your own `.env` file in the root of your project. This `.env` file will hold your environment variables. You can do this by running:

```bash
cp .env.example .env
```

Make sure to fill in the necessary values in your new `.env` file as needed for your development setup.

---

## License

Licensed under the [MIT license](https://github.com/gooddevil79/nextgram/blob/main/LICENSE).
