import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, 'Password should be at least 8 characters')
    .required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
  // .test({
  //   name: 'passwordConfirmation',
  //   message: 'Passwords must match',
  //   test() {
  //     debugger;
  //     return this.parent.password === this.parent.passwordConfirmation;
  //   },
  // }),
});

export interface ISignupForm {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const useSignupForm = (defaultValues: Partial<ISignupForm>) => {
  const {
    formState: { errors },
    ...params
  } = useForm<ISignupForm>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  return {
    ...params,
    errors,
  };
};
