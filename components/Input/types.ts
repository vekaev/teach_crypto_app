export interface InputProps {
  id?: string;
  label?: string;
  type?: 'text' | 'email' | 'password';
  value: string;
  onChange: (value: string) => void;
  className?: string;
}
