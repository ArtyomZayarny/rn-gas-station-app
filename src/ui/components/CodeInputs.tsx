import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Input} from './Input';
import {Colors} from '../../colors';
import {checkSmsCode} from '../../utils';

type Props = {
  confirmSmsCode: (v: boolean) => void;
};

export const CodeInputs = ({confirmSmsCode}: Props) => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [four, setFour] = useState('');
  const [correct, setCorrect] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (first && second && third && four) {
      if (checkSmsCode(`${first}${second}${third}${four}`)) {
        setCorrect(true);
        confirmSmsCode(true);
      } else {
        setError(true);
      }
    } else {
      setCorrect(false);
      setError(false);
      confirmSmsCode(false);
    }
  }, [first, second, third, four, setCorrect, confirmSmsCode]);

  return (
    <View style={styles.codeWrap}>
      <Input
        keyboardType="numeric"
        maxLength={1}
        inputStyle={StyleSheet.flatten([
          styles.codeCell,
          error && styles.errorCell,
          correct && styles.correctCell,
        ])}
        value={first}
        setValue={setFirst}
      />
      <Input
        keyboardType="numeric"
        maxLength={1}
        inputStyle={StyleSheet.flatten([
          styles.codeCell,
          error && styles.errorCell,
          correct && styles.correctCell,
        ])}
        value={second}
        setValue={setSecond}
      />
      <Input
        keyboardType="numeric"
        maxLength={1}
        inputStyle={StyleSheet.flatten([
          styles.codeCell,
          error && styles.errorCell,
          correct && styles.correctCell,
        ])}
        value={third}
        setValue={setThird}
      />
      <Input
        keyboardType="numeric"
        maxLength={1}
        inputStyle={StyleSheet.flatten([
          styles.codeCell,
          error && styles.errorCell,
          correct && styles.correctCell,
        ])}
        value={four}
        setValue={setFour}
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
