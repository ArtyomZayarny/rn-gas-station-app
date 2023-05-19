import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState('');
  const [userId, setUserId] = useState(null);
  const navigation = useNavigation();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userId');

      if (value !== null) {
        setUserId(value);
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    } catch (e) {
      // error reading value
    }
  };

  const storeData = useCallback(async value => {
    try {
      await AsyncStorage.setItem('userId', value);
      console.log('userId was saved');
    } catch (e) {
      // saving error
    }
  }, []);

  const removeValue = useCallback(async () => {
    try {
      await AsyncStorage.removeItem('userId');
      setIsAuth(false);
    } catch (e) {
      // remove error
    }

    console.log('Done.');
    navigation.navigate('Home');
  }, [navigation]);

  useEffect(() => {
    getData();
  }, [isAuth, userId]);

  return {
    removeValue,
    storeData,
    getData,
    isAuth,
    userId,
  };
};
