import { render, screen } from '@testing-library/react';
import App from './App';

test('https://todo-foqz.onrender.com', () => {
  render(<App />);
  const linkElement = screen.getByText(/https://todo-foqz.onrender.com/i);
  expect(linkElement).toBeInTheDocument();
});
