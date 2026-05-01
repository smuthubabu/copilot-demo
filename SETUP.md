# Login Page Test Example

This project demonstrates a React login page component with comprehensive test coverage.

## Files

- **LoginPage.jsx** - React login page component with form validation and error handling
- **LoginPage.test.jsx** - Jest tests using React Testing Library
- **LoginPage.css** - Styling for the login page

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Required devDependencies

Add these to your `package.json`:

```json
{
  "devDependencies": {
    "@testing-library/react": "^13.0.0",
    "@testing-library/jest-dom": "^5.16.0",
    "@testing-library/user-event": "^14.0.0",
    "jest": "^29.0.0",
    "babel-jest": "^29.0.0",
    "@babel/preset-env": "^7.20.0",
    "@babel/preset-react": "^7.18.0"
  }
}
```

### 3. Jest Configuration

Add to `package.json`:

```json
{
  "jest": {
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"],
    "moduleNameMapper": {
      "\\.css$": "identity-obj-proxy"
    }
  }
}
```

### 4. Setup Tests File

Create `src/setupTests.js`:

```javascript
import '@testing-library/jest-dom';
```

## Running Tests

```bash
npm test                    # Run all tests
npm test -- --watch        # Run tests in watch mode
npm test -- --coverage     # Run with coverage report
```

## Test Coverage

The test suite covers:

- ✅ Component rendering
- ✅ Empty field validation
- ✅ Email format validation
- ✅ Successful login submission
- ✅ Loading state during submission
- ✅ Error message clearing

## Component Features

- Email and password input fields
- Client-side validation
- Error message display
- Loading state feedback
- Callback function for successful login

## Example Usage

```jsx
import { LoginPage } from './LoginPage';
import './LoginPage.css';

function App() {
  const handleLogin = (credentials) => {
    console.log('Logging in with:', credentials);
    // Call your API here
  };

  return <LoginPage onLogin={handleLogin} />;
}
```
