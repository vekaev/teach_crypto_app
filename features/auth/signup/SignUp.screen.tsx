import { useEffect, useMemo, useState } from 'react';

import { IEvent } from '@types';
import { Input, PasswordInput } from '@components/Input';
import delay from '@utils/delay';

const SignUpScreen = () => {
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    delay(() => setLoading(false), 1000);
  }, []);

  const buttonEnabled: boolean = useMemo(
    () => checked && Boolean(email) && Boolean(password),
    [checked, email, password]
  );

  const handleCheck = (e: IEvent) => {
    setChecked(e.target.checked);
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <h1>Sign up</h1>
      <Input
        type="email"
        value={email}
        placeholder="Email:"
        onChange={setEmail}
      />
      <PasswordInput value={password} onChange={setPassword} />
      <input type="checkbox" checked={checked} onChange={handleCheck} />
      <button type="submit" disabled={!buttonEnabled}>
        Sign up
      </button>
    </>
  );
};

export default SignUpScreen;
