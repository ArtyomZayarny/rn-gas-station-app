import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {Colors} from '../../colors';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
  style?: ViewStyle;
  onPress?: () => void;
};

export const Button = ({title, style, onPress}: Props) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate('Registration');
  };

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.container, style])}
      onPress={onPress ? onPress : pressHandler}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    paddingVertical: 18,
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
    color: Colors.white1,
    fontWeight: '600',
    marginLeft: 22,
    fontSize: 18,
    fontFamily: 'NotoSans-Bold',
  },
});
