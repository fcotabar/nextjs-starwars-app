import { screen, render } from '@testing-library/react';
import Page from '../../pages';

test('Should render something', () => {
  render(<Page />);

  expect(screen.getByText(/get started/i)).toBeInTheDocument();
});
