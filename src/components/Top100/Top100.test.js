import React from 'react';
import { render } from '@testing-library/react';
import Top100 from './Top100';

test('renders learn react link', () => {
  const { getByText } = render(<Top100 />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
