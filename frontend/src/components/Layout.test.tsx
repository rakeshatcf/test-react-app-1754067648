import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout Component', () => {
  test('renders children content', () => {
    render(
      <Layout>
        <div data-testid="child-content">Test Content</div>
      </Layout>
    );
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
  });

  test('applies correct styling', () => {
    render(<Layout><div>Content</div></Layout>);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass('content');
  });
});