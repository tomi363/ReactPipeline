import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';  // Add this import
import App from './App';

test('renders Vite + React heading', () => {
    render(<App />);
    
    // Use exact text match instead of regex
    const headingElement = screen.getByText('Vite + React');
    expect(headingElement).toBeInTheDocument();
  });