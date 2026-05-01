import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dashboard } from './Dashboard';

const mockUser = { email: 'user@example.com' };

describe('Dashboard', () => {
  it('renders user email', () => {
    render(<Dashboard user={mockUser} onLogout={jest.fn()} />);
    expect(screen.getByTestId('user-email')).toHaveTextContent('user@example.com');
  });

  it('renders stat cards', () => {
    render(<Dashboard user={mockUser} onLogout={jest.fn()} />);
    expect(screen.getAllByTestId('stat-card')).toHaveLength(3);
  });

  it('calls onLogout when logout button clicked', () => {
    const mockLogout = jest.fn();
    render(<Dashboard user={mockUser} onLogout={mockLogout} />);
    fireEvent.click(screen.getByTestId('logout-button'));
    expect(mockLogout).toHaveBeenCalled();
  });
});
