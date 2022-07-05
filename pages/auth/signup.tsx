import { FunctionComponent, useEffect } from 'react';
import usePersistStorage from '@hooks/usePersistStorage';
import { ISignupForm, useSignupForm } from '@hooks/useSignupForm';
import { Controller, Control } from 'react-hook-form';

import { Input } from '@components/Input';

interface InputFieldProps<TForm> {
  control: Control<TForm>;
  name: keyof TForm;
  label: string;
  type: 'text' | 'email' | 'password';
}

const InputField: FunctionComponent<InputFieldProps<ISignupForm>> = ({
  control,
  name,
  label,
  type = 'text',
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { value, onChange }, fieldState: { error } }) => (
      <>
        <label htmlFor={label}>
          {label}
          <Input id={label} type={type} value={value} onChange={onChange} />
        </label>
        {error && <div>{error.message}</div>}
      </>
    )}
  />
);

interface LogInFormProps {
  onSubmit: (data: ISignupForm) => void;
}

const SignUpForm: FunctionComponent<LogInFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = usePersistStorage(null, 'email');
  const { handleSubmit, control, watch } = useSignupForm({ email });
  const watchEmail = watch('email');

  useEffect(() => setEmail(watchEmail), [watchEmail]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid' }}>
      <InputField
        name="email"
        control={control}
        label="Enter your email"
        type="email"
      />
      <InputField
        name="password"
        control={control}
        label="Enter your password"
        type="password"
      />
      <InputField
        name="passwordConfirmation"
        type="password"
        control={control}
        label="Confirm your password"
      />
      <button
        type="submit"
        className="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

// TODO: add auth functionality when mentor add backend
const Auth = () => {
  const handleSubmit = async (data: ISignupForm) => {
    console.log(data);
  };

  return (
    <div>
      <SignUpForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Auth;
