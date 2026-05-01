import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

describe('App', () => {
  it('renders LoginPage initially', () => {
    render(<App />);
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
  });

  it('shows Dashboard after successful login', async () => {
    render(<App />);

    await userEvent.type(screen.getByTestId('email-input'), 'user@example.com');
    await userEvent.type(screen.getByTestId('password-input'), 'password123');
    fireEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(screen.getByTestId('user-email')).toHaveTextContent('user@example.com');
    });
  });

  it('returns to LoginPage after logout', async () => {
    render(<App />);

    await userEvent.type(screen.getByTestId('email-input'), 'user@example.com');
    await userEvent.type(screen.getByTestId('password-input'), 'password123');
    fireEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(screen.getByTestId('logout-button')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('logout-button'));
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
  });
});
