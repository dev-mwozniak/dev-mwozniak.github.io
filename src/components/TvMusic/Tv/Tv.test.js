import React from 'react';
import { render } from '@testing-library/react';
import Tv from './Tv';

test('renders learn react link', () => {
  const { getByText } = render(<Tv />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
