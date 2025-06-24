import { render } from '@testing-library/react';
import Bgeffect from '@/components/ui/bg-effect';

test('renders 40 animated background lines', () => {
  const { container } = render(<Bgeffect />);
  const lines = container.querySelectorAll('.bg-purple-400\\/30');
  expect(lines.length).toBe(40);
});
