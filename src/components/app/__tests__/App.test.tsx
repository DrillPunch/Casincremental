import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Deal/i);
  expect(linkElement).toBeInTheDocument();
});
