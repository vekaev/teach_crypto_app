export { default as Input } from './Input';
export { default as PasswordInput } from './PasswordInput';

export * from './types';
export * from './styled';

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
