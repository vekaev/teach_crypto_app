import { render, screen } from '@testing-library/react';

import Input from './Input';

describe('Input component', () => {
  test('should render', () => {
    const testId = 'test_input';

    render(<Input data-testid={testId} value="" onChange={() => 1} />);

    const element = screen.getByTestId(testId);

    expect(element).toBeInTheDocument();
  });
});
