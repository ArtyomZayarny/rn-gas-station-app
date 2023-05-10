import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Input} from './Input';

export const CodeInputs = () => {
  return (
    <View style={styles.codeWrap}>
      <Input keyboardType="numeric" inputStyle={styles.codeCell} />
      <Input keyboardType="numeric" inputStyle={styles.codeCell} />
      <Input keyboardType="numeric" inputStyle={styles.codeCell} />
      <Input keyboardType="numeric" inputStyle={styles.codeCell} />
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
  },
});
