import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Label} from '../ui/components/Label';
import {Input} from '../ui/components/Input';

export const UserDetails = () => {
  const [name, setName] = useState('');
  const [sureName, setSureName] = useState('');
  return (
    <View>
      <Label>Ваше ім’я</Label>
      <Input value={name} setValue={setName} />
      <Label>Ваше прізвище</Label>
      <Input value={sureName} setValue={setSureName} />
    </View>
  );
};

const styles = StyleSheet.create({});
