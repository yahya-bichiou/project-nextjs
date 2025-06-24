import { render, screen } from '@testing-library/react';
import FlyingFile from '@/components/flyingfile';

test('shows file image', () => {
  render(<FlyingFile />);
  const image = screen.getByAltText('Interactive file');
  expect(image).toBeInTheDocument();
});
