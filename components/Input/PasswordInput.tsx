import React, { useCallback, useState } from 'react';
import Input from './Input';
import { InputProps } from './types';

const withPassword = (InputComponent: React.FC<InputProps>) => {
  return ({ placeholder, ...props }: InputProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggle = useCallback(() => setIsVisible(prev => !prev), []);

    return (
      <div>
        <InputComponent
          {...props}
          placeholder={placeholder || 'Password: '}
          type={isVisible ? 'text' : 'password'}
        />
        <button type="button" onClick={toggle}>
          EYE: {isVisible ? 'OPENED' : 'CLOSED'}
        </button>
      </div>
    );
  };
};

const PasswordInput = withPassword(Input);

export default PasswordInput;
