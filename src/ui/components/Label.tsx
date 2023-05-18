import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import {Colors} from '../../colors';

type Props = {
  children: React.ReactNode;
  style?: TextStyle;
  underLined?: boolean;
};

export const Label = ({children, style, underLined = false}: Props) => {
  return (
    <View style={underLined && styles.underLined}>
      <Text style={StyleSheet.flatten([styles.label, style])}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  underLined: {
    borderBottomColor: Colors.black1,
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.black1,
    fontFamily: 'NotoSans-Bold',
    marginBottom: 12,
  },
});
