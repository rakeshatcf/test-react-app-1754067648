import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  const renderApp = () => {
    return render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  };

  test('renders app without crashing', () => {
    renderApp();
    const element = screen.getByText(/Home Page/i);
    expect(element).toBeInTheDocument();
  });

  test('navigates between pages', async () => {
    renderApp();
    const user = userEvent.setup();
    
    // Click navigation links
    const aboutLink = screen.getByText(/About/i);
    await user.click(aboutLink);
    expect(screen.getByText(/About Page/i)).toBeInTheDocument();
  });

  test('layout components are present', () => {
    renderApp();
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('navigation')).toBeInTheDocument(); // Nav
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });
});