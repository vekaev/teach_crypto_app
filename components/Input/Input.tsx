import React, { useCallback, FunctionComponent } from 'react';

import { InputProps } from './types';

// interface Car {
//   id: number;
// }
//
// interface User {
//   name: string;
//   gender: 'm' | 'f' | string;
//   car?: Car;
// }
//
// interface TransformedUser extends User {
//   authorized: boolean;
//   token: string;
// }
//
// const user = {
//   name: 'John',
//   gender: 'm',
// };
//
// // const user1: User = {
// //   name: 'Anna',
// //   gender: 'f',
// // };
//
// const transformUser = (u: User): TransformedUser => {
//   return { ...u, authorized: false, token: '' };
// };
//
// transformUser(user);

const Input: FunctionComponent<InputProps> = ({
  value,
  onChange,
  className,
  ...props
}) => {
  const handleChange = useCallback(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    e => {
      const { value: v } = e.target;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onChange(v, e);
    },
    [onChange]
  );

  return (
    <div className="mt-1 relative rounded-md shadow-md">
      <input
        {...props}
        value={value || ''}
        onChange={handleChange}
        className={`block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md ${className}`}
      />
    </div>
  );
};

Input.defaultProps = {
  className: '',
};

export default React.memo(Input);
