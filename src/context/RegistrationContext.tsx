import React, {useCallback, useContext, useState} from 'react';
import {RegistrationStep} from '../constants';
import {isPhoneValid} from '../utils';
import {ref, set} from 'firebase/database';
import {db} from '../../firebase';
import uuid from 'react-native-uuid';
import {useNavigation} from '@react-navigation/native';
import {useAuthContext} from './AuthContext';

type RegistrationContextType = {
  step: string;
  setStep: (v: RegistrationStep) => void;
  phone: string;
  setPhone: () => void;
  phoneValid: boolean;
  setPhoneValid: () => void;
  codeSmsTaken: boolean;
  setCodeSmsTaken: (v: boolean) => void;
  code: boolean;
  setCode: () => void;
  confirmedCode: boolean;
  setConfirmedCode: () => void;
  name: string;
  setName: () => void;
  sureName: string;
  setSureName: () => void;
  showDate: boolean;
  setShowDate: () => void;
  registrationNextHandler: () => void;
  checkSmsCode: () => void;
  date: string;
  setDate: (v: string) => void;
  dateConfirmed: boolean;
  setDateConfirmed: (v: boolean) => void;
};

export const RegistrationContext = React.createContext<RegistrationContextType>(
  {} as RegistrationContextType,
);

type Props = {
  children?: React.ReactNode;
};

export const RegistrationContextProvider = ({children}: Props) => {
  const [step, setStep] = useState(RegistrationStep.PHONE);
  const [phone, setPhone] = useState('');
  const [phoneValid, setPhoneValid] = useState(true);
  const [codeSmsTaken, setCodeSmsTaken] = useState(false);
  const [code, setCode] = useState(false);
  const [confirmedCode, setConfirmedCode] = useState(false);
  const [name, setName] = useState('');
  const [sureName, setSureName] = useState('');
  const [date, setDate] = useState(new Date());
  const [dateConfirmed, setDateConfirmed] = useState(false);

  const navigation = useNavigation();
  const {storeData} = useAuthContext();

  const handleCheckPhone = useCallback(() => {
    if (isPhoneValid(phone)) {
      setCodeSmsTaken(true);
      setStep(RegistrationStep.CODE);
    } else {
      //set phone error
      setPhoneValid(false);
    }
  }, [phone, setCodeSmsTaken, setPhoneValid]);

  const checkSmsCode = useCallback(
    (code: boolean) => {
      setCode(code);
    },
    [setCode],
  );

  const nextToUserInfo = useCallback(() => {
    setConfirmedCode(true);
    setStep(RegistrationStep.INFO);
  }, [setConfirmedCode]);

  const nextToBirthDay = useCallback(() => {
    setStep(RegistrationStep.DATE);
  }, [setStep]);

  const registerUser = useCallback(() => {
    const userId = uuid.v4();
    set(ref(db, 'users/' + userId), {
      phone,
      name,
      sureName,
      birthDay: date.toDateString(),
    })
      .then(() => {
        navigation.navigate('Home');
        storeData(userId);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, [name, phone, sureName, date, navigation, storeData]);

  const registrationNextHandler = useCallback(() => {
    if (name && sureName && phone && code && dateConfirmed) {
      return registerUser();
    }
    if (name && sureName) {
      return nextToBirthDay();
    }
    return codeSmsTaken && code ? nextToUserInfo() : handleCheckPhone();
  }, [
    code,
    codeSmsTaken,
    name,
    sureName,
    handleCheckPhone,
    nextToBirthDay,
    nextToUserInfo,
    dateConfirmed,
    phone,
    registerUser,
  ]);

  const value = {
    step,
    setStep,
    name,
    setName,
    phone,
    setPhone,
    phoneValid,
    setPhoneValid,
    codeSmsTaken,
    setCodeSmsTaken,
    code,
    setCode,
    confirmedCode,
    setConfirmedCode,
    sureName,
    setSureName,
    registrationNextHandler,
    checkSmsCode,
    date,
    setDate,
    dateConfirmed,
    setDateConfirmed,
  };
  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistrationContent = () => useContext(RegistrationContext);
