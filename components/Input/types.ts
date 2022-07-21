import { IEvent } from '@types';

export interface InputProps {
  id?: string;
  label?: string;
  type?: 'text' | 'email' | 'password';
  autocomplete?: boolean;
  value: string;
  onChange: (value: string, event: IEvent) => void;
  className?: string;
  placeholder?: string;
}

export interface AdditionalInputProps {
  autocomplete?: 'on' | 'off' | string;
}
