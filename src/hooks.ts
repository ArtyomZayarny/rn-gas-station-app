import {useState} from 'react';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState('');

  return {
    isAuth,
  };
};
