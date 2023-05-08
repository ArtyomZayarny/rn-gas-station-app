import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../colors';
import {Button} from './Button';

export const NeedRegister = () => {
  return (
    <View style={{padding: 22}}>
      <Text style={styles.text}>
        Зареєструйстесь для створення власного кабінету
      </Text>
      <Button title="Зареєструватись" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black1,
    fontFamily: 'NotoSans-Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 2,
    marginBottom: 32,
  },
});
