import { render } from '@testing-library/react';
import FlyingFile from '@/components/flyingfile';

test('renders FlyingFile component', () => {
  const { container } = render(<FlyingFile />);
  expect(container).toBeInTheDocument();
});
