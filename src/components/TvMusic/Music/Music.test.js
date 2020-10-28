import React from 'react';
import { render } from '@testing-library/react';
import Music from './Music';

test('renders learn react link', () => {
  const { getByText } = render(<Music />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
