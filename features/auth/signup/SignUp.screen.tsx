import React, { useMemo, useState } from 'react';
import { IEvent } from '@types';

const SignUpScreen = () => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');
  const buttonDisabled = useMemo(() => !checked || !value, [checked, value]);

  const handleCheck = (e: IEvent) => {
    setChecked(e.target.checked);
  };

  const handleChange = (e: IEvent) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input
        data-testid="email_input"
        type="email"
        placeholder="Email: "
        value={value}
        onChange={handleChange}
      />
      <input type="checkbox" checked={checked} onChange={handleCheck} />
      <button disabled={buttonDisabled} type="submit">
        Sign up
      </button>
    </>
  );
};

export default SignUpScreen;
