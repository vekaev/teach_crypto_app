import { render, fireEvent } from '@testing-library/react';

import SignUpScreen from '../SignUp.screen';

describe('SignUp.screen', () => {
  it('initial render', () => {
    const screen = render(<SignUpScreen />);

    const emailInput = screen.queryByPlaceholderText('Email:');
    const passwordInput = screen.queryByPlaceholderText('Password:');
    const checkbox = screen.queryByRole('checkbox');
    const button = screen.queryByRole('button', { name: 'Sign up' });

    expect(emailInput).toBeNull();
    expect(passwordInput).toBeNull();
    expect(checkbox).toBeNull();
    expect(button).toBeNull();
  });

  // TODO: fix this test
  it.skip('button should be enabled after with checkbox checked and inputs not empty and disabled after disable checkbox', () => {
    const screen = render(<SignUpScreen />);

    const emailInput = screen.getByPlaceholderText('Email:');
    const passwordInput = screen.getByPlaceholderText('Password:');
    const checkbox = screen.getByRole('checkbox');
    const button = screen.getByRole('button', { name: 'Sign up' });

    fireEvent.input(emailInput, { target: { value: 'test@email.com' } });
    fireEvent.input(passwordInput, { target: { value: 'PASSWORD' } });
    fireEvent.click(checkbox);

    expect(emailInput).toHaveValue('test@email.com');
    expect(passwordInput).toHaveValue('PASSWORD');
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});
