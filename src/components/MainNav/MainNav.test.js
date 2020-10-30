import React from 'react';
import { render } from '@testing-library/react';
import MainNav from './MainNav';

test('renders learn react link', () => {
  const { getByText } = render(<MainNav />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
