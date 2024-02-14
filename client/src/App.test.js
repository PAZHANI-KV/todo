import { render, screen } from '@testing-library/react';
import App from './App';

test('https://todo-foqz.onrender.com/', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
