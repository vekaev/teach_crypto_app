import { render, fireEvent } from '@testing-library/react';
import SignUpScreen from '../SignUp.screen';

describe('SignUp.screen', () => {
  it('initial render', () => {
    const screen = render(<SignUpScreen />);

    const input = screen.getByPlaceholderText('Email');
    const checkbox = screen.getByRole('checkbox');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(input).toHaveValue('');
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it('button should be enabled afet with checkbox checked and input not empty', () => {
    const screen = render(<SignUpScreen />);

    const input = screen.getByPlaceholderText('Email');
    const checkbox = screen.getByRole('checkbox');
    const button = screen.getByRole('button');

    fireEvent.input(input, { target: { value: 'test@email.com' } });
    fireEvent.click(checkbox);

    expect(input).toHaveValue('test@email.com');
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();
  });
});
