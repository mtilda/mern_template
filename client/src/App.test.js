/* standard/semistandard exceptions: */
/* global test expect */

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders punchline', () => {
  render(<App />);
  const punchline = screen.getByText(/...you had better go catch it!/i);
  expect(punchline).toBeInTheDocument();
});
