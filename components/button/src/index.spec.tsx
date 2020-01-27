import React from 'react';
import { render } from '@testing-library/react';
import Button from '.';

test("renders 'Ola mundo'", () => {
  const { getByText } = render(<Button>Ola mundo</Button>);
  const linkElement = getByText(/Ola mundo/i);
  expect(linkElement).toBeInTheDocument();
});
