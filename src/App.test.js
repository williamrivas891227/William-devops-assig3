import { render, screen } from '@testing-library/react';
import { act } from 'react'; // Asegúrate de importar act desde react
import App from './App';

test('renders welcome message', () => {
  act(() => {
    render(<App />);
  });
  const headerElement = screen.getByText(/welcome to jenkins/i);
  expect(headerElement).toBeInTheDocument();
});
