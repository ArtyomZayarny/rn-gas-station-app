import {View} from 'react-native';
import React from 'react';
import {Label} from '../ui/components/Label';
import {Input} from '../ui/components/Input';

type Props = {
  name: string;
  setName: (v: string) => void;
  sureName: string;
  setSureName: (v: string) => void;
};

export const UserDetails = ({name, setName, sureName, setSureName}: Props) => {
  return (
    <View>
      <Label>Ваше ім’я</Label>
      <Input value={name} setValue={setName} />
      <Label>Ваше прізвище</Label>
      <Input value={sureName} setValue={setSureName} />
    </View>
  );
};
