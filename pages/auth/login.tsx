import { FunctionComponent } from 'react';
import { ILoginForm, useLoginForm } from '@hooks/useLoginForm';

interface LogInFormProps {
  onSubmit: (data: ILoginForm) => void;
}

const LogInForm: FunctionComponent<LogInFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useLoginForm();
  console.log(errors);
  // const [logInData, setLogInData] = useState<ILoginForm>({
  //   email: '',
  //   password: '',
  // });
  // const { email, password } = logInData;
  //
  // const handleInputChange = useCallback(
  //   (key: keyof ILoginForm) => (value: string) => {
  //     const newData = { ...logInData };
  //
  //     newData[key] = value;
  //
  //     setLogInData(newData);
  //   },
  //   []
  // );
  //
  // const handleSubmit = useCallback(
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   e => {
  //     e.preventDefault();
  //     onSubmit(logInData);
  //   },
  //   [logInData, onSubmit]
  // );

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid' }}>
      <input type="email" {...register('email')} />
      <input type="password" {...register('password')} />
      {errors.email?.message && <div>{errors.email?.message}</div>}
      {errors.password?.message && <div>{errors.password?.message}</div>}
      <button type="submit">Submit</button>

      {/* <InputField */}
      {/*  label="Enter your email" */}
      {/*  type="email" */}
      {/*  value={email} */}
      {/*  onChange={handleInputChange('email')} */}
      {/* /> */}
      {/* <InputField */}
      {/*  label="Enter your password" */}
      {/*  type="password" */}
      {/*  value={password} */}
      {/*  onChange={handleInputChange('password')} */}
      {/* /> */}
      {/* <button */}
      {/*  type="submit" */}
      {/*  onClick={handleSubmit} */}
      {/*  className="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none" */}
      {/* > */}
      {/*  Submit */}
      {/* </button> */}
    </form>
  );
};

// TODO: add auth functionality when mentor add backend
const Auth = () => {
  const handleSubmit = async (data: ILoginForm) => {
    console.log(data);
  };

  return (
    <div>
      <LogInForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Auth;
