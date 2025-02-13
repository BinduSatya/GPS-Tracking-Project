# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Environment Variables

- `.env`: Contains environment variables for the project.
  - `VITE_BASE_URL`: The base URL for the backend API.

## Configuration Files

- `.gitignore`: Specifies files and directories to be ignored by Git.
- `eslint.config.js`: Configuration for ESLint.
- `vite.config.js`: Configuration for Vite.

## HTML Entry Point

- `index.html`: The main HTML file that serves as the entry point for the React application.

## Main Application Files

- `src/App.jsx`: The main application component that defines the routes for the application.
- `src/main.jsx`: The entry point for the React application, where the root component is rendered.

## Context

- `src/assets/context/UserContext.jsx`: Provides a context for managing user data across the application.

## Pages

### CaptainLogin.jsx

- **Path**: `/captain-login`
- **Description**: Provides a login form for captains.
- **Components**:
  - `Header`: Displays the header with an image and title.
- **State**:
  - `email`: Stores the email input value.
  - `password`: Stores the password input value.
  - `captainData`: Stores the captain's login data.
- **Handlers**:
  - `submitHandler`: Handles form submission and updates the `captainData` state.

### CaptainSignUp.jsx

- **Path**: `/captain-signup`
- **Description**: Provides a signup form for captains.
- **Components**:
  - `Header`: Displays the header with an image and title.
- **State**:
  - `firstname`: Stores the first name input value.
  - `lastname`: Stores the last name input value.
  - `email`: Stores the email input value.
  - `password`: Stores the password input value.
  - `confirmPassword`: Stores the confirm password input value.
  - `userData`: Stores the captain's signup data.
- **Handlers**:
  - `submitHandler`: Handles form submission and updates the `userData` state.

### Header.jsx

- **Description**: Displays the header with an image and title.
- **Components**:
  - `img`: Displays the car image.
  - `h1`: Displays the title "Arun".

### Home.jsx

- **Path**: `/home`
- **Description**: Displays the home page.
- **Components**:
  - `div`: Displays the text "Home".

### Start.jsx

- **Path**: `/`
- **Description**: Displays the start page with a background image and a link to the login page.
- **Components**:
  - `Header`: Displays the header with an image and title.
  - `Link`: Provides a link to the login page.

### UseProtectedWrapper.jsx

- **Description**: A higher-order component that protects routes by checking for a valid token.
- **State**:
  - `token`: Retrieves the token from localStorage.
- **Effects**:
  - `useEffect`: Redirects to the login page if no token is found.

### UserLogin.jsx

- **Path**: `/login`
- **Description**: Provides a login form for users.
- **Components**:
  - `Header`: Displays the header with an image and title.
- **State**:
  - `email`: Stores the email input value.
  - `password`: Stores the password input value.
- **Handlers**:
  - `submitHandler`: Handles form submission, sends a login request to the backend, and updates the user context and localStorage with the token.

### UserSignUp.jsx

- **Path**: `/signup`
- **Description**: Provides a signup form for users.
- **Components**:
  - `Header`: Displays the header with an image and title.
- **State**:
  - `firstname`: Stores the first name input value.
  - `lastname`: Stores the last name input value.
  - `email`: Stores the email input value.
  - `password`: Stores the password input value.
  - `confirmPassword`: Stores the confirm password input value.
- **Handlers**:
  - `submitHandler`: Handles form submission, sends a signup request to the backend, and updates the user context and localStorage with the token.

## Styles

- `src/App.css`: Contains the global styles for the application.
- `src/index.css`: Contains additional styles for the application.

## Assets

- `src/assets/images/car.png`: An image of a car used in the header component.
- `src/assets/react.svg`: The React logo.

## Public

- `public/vite.svg`: The Vite logo.

## Scripts

- `package.json`: Contains the scripts for running, building, and linting the application.
  - `dev`: Starts the development server.
  - `build`: Builds the application for production.
  - `lint`: Runs ESLint to check for code quality issues.
  - `preview`: Previews the production build.

## Dependencies

- `package.json`: Lists the dependencies and devDependencies for the project.
  - `dependencies`: Includes React, React DOM, React Router DOM, Axios, Tailwind CSS, and Vite.
  - `devDependencies`: Includes ESLint, ESLint plugins, and Vite plugins.
