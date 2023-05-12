import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Input} from './Input';
import {Colors} from '../../colors';

export const CodeInputs = () => {
  const error = null;
  return (
    <View style={styles.codeWrap}>
      <Input
        keyboardType="numeric"
        maxLength={1}
        inputStyle={StyleSheet.flatten([
          styles.codeCell,
          error ? styles.errorCell : styles.correctCell,
        ])}
      />
      <Input
        keyboardType="numeric"
        maxLength={1}
        inputStyle={StyleSheet.flatten([
          styles.codeCell,
          error ? styles.errorCell : styles.correctCell,
        ])}
      />
      <Input
        keyboardType="numeric"
        maxLength={1}
        inputStyle={StyleSheet.flatten([
          styles.codeCell,
          error ? styles.errorCell : styles.correctCell,
        ])}
      />
      <Input
        keyboardType="numeric"
        maxLength={1}
        inputStyle={StyleSheet.flatten([
          styles.codeCell,
          error ? styles.errorCell : styles.correctCell,
        ])}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  codeWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  codeCell: {
    width: 68,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 15,
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    fontWeight: '400',
    color: Colors.black1,
  },
  correctCell: {
    borderColor: Colors.green,
    borderWidth: 1,
  },
  errorCell: {
    borderColor: Colors.error,
    borderWidth: 1,
  },
});
