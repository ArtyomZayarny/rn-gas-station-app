import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Label} from './Label';
import {CodeInputs} from './CodeInputs';
import {Link} from './Link';
import {Colors} from '../../colors';

type Props = {
  confirmSmsCode: (v: boolean) => void;
};

export const CodeSection = ({confirmSmsCode}: Props) => {
  return (
    <View>
      <Label>Введіть код з SMS</Label>
      <CodeInputs confirmSmsCode={confirmSmsCode} />
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
