import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator Page', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should return product of two numbers', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByRole('none');
    expect(result.textContent).toBe('6');
  });
});