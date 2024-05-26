import Home from '@/app/page';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// Mock de axios para simular la solicitud POST
jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ data: { result: 'A' } }))
}));

test('loads data perfectly', async () => {
  // ARRANGE
  render(<Home apiUrl="http://localhost:3002/api/knn" />);

  // Esperamos a que la pantalla se actualice con el resultado
  await waitFor(() => {
    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('Resultado: A');
  });
});
