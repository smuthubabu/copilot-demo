import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginPage } from './LoginPage';

describe('LoginPage', () => {
  it('renders login form with email and password fields', () => {
    const mockOnLogin = jest.fn();
    render(<LoginPage onLogin={mockOnLogin} />);

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('shows error when email or password is empty', async () => {
    const mockOnLogin = jest.fn();
    render(<LoginPage onLogin={mockOnLogin} />);

    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId('error')).toHaveTextContent('Email and password are required');
    });

    expect(mockOnLogin).not.toHaveBeenCalled();
  });

  it('shows error for invalid email format', async () => {
    const mockOnLogin = jest.fn();
    render(<LoginPage onLogin={mockOnLogin} />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitButton = screen.getByTestId('submit-button');

    await userEvent.type(emailInput, 'invalidemail');
    await userEvent.type(passwordInput, 'password123');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId('error')).toHaveTextContent('Invalid email format');
    });

    expect(mockOnLogin).not.toHaveBeenCalled();
  });

  it('calls onLogin with valid email and password', async () => {
    const mockOnLogin = jest.fn();
    render(<LoginPage onLogin={mockOnLogin} />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitButton = screen.getByTestId('submit-button');

    await userEvent.type(emailInput, 'user@example.com');
    await userEvent.type(passwordInput, 'password123');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnLogin).toHaveBeenCalledWith({
        email: 'user@example.com',
        password: 'password123',
      });
    });
  });

  it('shows loading state when submitting', async () => {
    const mockOnLogin = jest.fn(() => new Promise(resolve => setTimeout(resolve, 1000)));
    render(<LoginPage onLogin={mockOnLogin} />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitButton = screen.getByTestId('submit-button');

    await userEvent.type(emailInput, 'user@example.com');
    await userEvent.type(passwordInput, 'password123');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId('submit-button')).toHaveTextContent('Logging in...');
    });
  });

  it('clears error message on new submission', async () => {
    const mockOnLogin = jest.fn();
    render(<LoginPage onLogin={mockOnLogin} />);

    // First submit with empty fields to trigger error
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId('error')).toHaveTextContent('Email and password are required');
    });

    // Fill in valid data and submit again
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    await userEvent.type(emailInput, 'user@example.com');
    await userEvent.type(passwordInput, 'password123');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnLogin).toHaveBeenCalled();
    });
  });
});
