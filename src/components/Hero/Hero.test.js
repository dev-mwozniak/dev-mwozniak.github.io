import React from 'react';
import { render } from '@testing-library/react';
import Hero from './Hero';

test('renders learn react link', () => {
  const { getByText } = render(<Hero />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
