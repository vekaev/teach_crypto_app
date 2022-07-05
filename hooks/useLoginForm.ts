import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, 'Password should be at least 8 characters')
    .required(),
});

export interface ILoginForm {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const {
    formState: { errors },
    ...params
  } = useForm<ILoginForm>({
    resolver: yupResolver(validationSchema),
  });

  return {
    ...params,
    errors,
  };
};
