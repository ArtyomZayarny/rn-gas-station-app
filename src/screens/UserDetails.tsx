import {View} from 'react-native';
import React from 'react';
import {Label} from '../ui/components/Label';
import {Input} from '../ui/components/Input';
import {useRegistrationContent} from '../context/RegistrationContext';

export const UserDetails = () => {
  const {name, setName, sureName, setSureName} = useRegistrationContent();
  return (
    <View>
      <Label>Ваше ім’я</Label>
      <Input value={name} setValue={setName} />
      <Label>Ваше прізвище</Label>
      <Input value={sureName} setValue={setSureName} />
    </View>
  );
};
