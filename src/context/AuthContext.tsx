import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext, useEffect, useState} from 'react';

type AuthContextType = {
  isLogin: boolean;
  removeValue: () => void;
  storeData: (v: string) => void;
};

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType,
);

type Props = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({children}: Props) => {
  const [isLogin, setIsLogin] = useState(false);
  const navigation = useNavigation();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userId');
      return value;
    } catch (e) {
      // error reading value
    }
  };

  const checkIsLogin = useCallback(async () => {
    const userId = await getData();
    return userId ? setIsLogin(true) : setIsLogin(false);
  }, []);

  const storeData = useCallback(async (value: string) => {
    try {
      await AsyncStorage.setItem('userId', value);
      console.log('userId was saved');
      setIsLogin(true);
    } catch (e) {
      // saving error
    }
  }, []);

  const removeValue = useCallback(async () => {
    try {
      await AsyncStorage.removeItem('userId');
      console.log('user was deleted');
      await setIsLogin(false);
    } catch (e) {
      // remove error
    }
    navigation.navigate('Home');
  }, [navigation, setIsLogin]);

  useEffect(() => {
    checkIsLogin();
  }, [checkIsLogin]);

  const value = {
    isLogin,
    removeValue,
    storeData,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
