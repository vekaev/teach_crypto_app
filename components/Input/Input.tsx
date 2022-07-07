import { useCallback, FunctionComponent, useMemo, memo } from 'react';

import { IEvent } from '@types';

import { AdditionalInputProps, InputProps } from './types';
import { StyledInput } from './styled';

const Input: FunctionComponent<InputProps> = ({
  type,
  autocomplete,
  value,
  onChange,
  className,
  ...props
}) => {
  const handleChange = useCallback(
    (e: IEvent) => {
      const { value: v } = e.target;

      onChange(v, e);
    },
    [onChange]
  );

  const additionalProps: AdditionalInputProps = useMemo(() => {
    const result: AdditionalInputProps = {};

    if (type === 'password') {
      result.autocomplete = autocomplete ? 'new-password' : 'off';
    }

    return result;
  }, [type, autocomplete]);

  return (
    <div className="mt-1 relative rounded-md shadow-md">
      <StyledInput
        {...props}
        {...additionalProps}
        type={type}
        value={value || ''}
        onChange={handleChange}
        className={`block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md ${className}`}
      />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  className: '',
};

export default memo(Input);
