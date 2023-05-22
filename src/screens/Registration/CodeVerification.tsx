import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Label} from '../../ui/components/Label';
import {CodeInputs} from '../../ui/components/CodeInputs';
import {Link} from '../../ui/components/Link';
import {Colors} from '../../colors';

export const CodeVerification = () => {
  return (
    <View>
      <Label>Введіть код з SMS</Label>
      <CodeInputs />
      <Link style={styles.link}>Надіслати код повторно</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    textAlign: 'center',
    marginBottom: 28,
    fontWeight: '600',
    fontSize: 12,
    color: Colors.black1,
    fontFamily: 'NotoSans-Bold',
  },
});
