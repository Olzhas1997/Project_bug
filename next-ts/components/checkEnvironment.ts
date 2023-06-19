export const checkEnvironment = ():string => {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://project-bugs.aerokod.ru/';
};
