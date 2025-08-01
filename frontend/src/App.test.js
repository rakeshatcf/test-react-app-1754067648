import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  const element = screen.getByText(/Home Page/i);
  expect(element).toBeInTheDocument();
});