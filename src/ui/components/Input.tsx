import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

type Props = {
  icon?: JSX.Element;
  keyboardType: KeyboardTypeOptions;
  styleWrap?: ViewStyle;
  inputStyle?: ViewStyle;
};

export const Input = ({keyboardType, icon, styleWrap, inputStyle}: Props) => {
  return (
    <View style={styleWrap}>
      {icon && icon}
      <TextInput style={inputStyle} keyboardType={keyboardType} />
    </View>
  );
};

const styles = StyleSheet.create({});
