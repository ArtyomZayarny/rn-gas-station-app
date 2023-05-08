import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackIcon} from '../icons/BackIcon';
import {BurgerIcon} from '../icons/BurgerIcon';
import {Colors} from '../../colors';

type Props = {
  title: string;
};

const AuthHeader = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <BackIcon />
      <Text style={styles.text}>{title}</Text>
      <BurgerIcon />
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingVertical: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black1,
    fontFamily: 'NotoSans-Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 2,
  },
});
