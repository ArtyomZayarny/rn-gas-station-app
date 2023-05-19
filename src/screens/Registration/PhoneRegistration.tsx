import {StyleSheet} from 'react-native';
import React from 'react';
import {Label} from '../../ui/components/Label';
import {Input} from '../../ui/components/Input';
import {FlagIcon} from '../../ui/icons/FlagIcon';
import {Colors} from '../../colors';
import {useRegistrationContent} from '../../context/RegistrationContext';

export const PhoneRegistration = ({}) => {
  const {phone, setPhone, phoneValid, setPhoneValid} = useRegistrationContent();

  return (
    <>
      <Label>Введіть Ваш номер телефону</Label>
      <Input
        withMask
        phone
        icon={<FlagIcon />}
        keyboardType="numeric"
        styleWrap={styles.inputWrap}
        inputStyle={styles.input}
        setValue={setPhone}
        value={phone}
        isValid={phoneValid}
        setValid={setPhoneValid}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputWrap: {
    width: '100%',
    position: 'relative',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 44,
    backgroundColor: Colors.white1,
    borderRadius: 15,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'NotoSans-Bold',
    color: Colors.black1,
    paddingLeft: 75,
    letterSpacing: 0.6,
  },
});
