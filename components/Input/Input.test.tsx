import { render } from '@testing-library/react';

import Input from './Input';

describe('Input component', () => {
  test('should render', () => {
    const onChange = jest.fn();

    render(<Input value="" onChange={onChange} />);

    //  TODO: fix this test
  });
});
