import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Colors} from '../../colors';

type Props = {
  children: React.ReactNode;
};

export const Label = ({children}: Props) => {
  return <Text style={styles.label}>{children}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.black1,
    fontFamily: 'NotoSans-Bold',
    marginBottom: 12,
  },
});
