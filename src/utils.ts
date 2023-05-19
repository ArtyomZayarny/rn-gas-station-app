import {SMS_CODE} from './constants';

export const isPhoneValid = (phone: string) => {
  if (phone.length >= 10) {
    return true;
  }
  return false;
};

export const checkSmsCode = (code: string) => {
  return code === SMS_CODE;
};
