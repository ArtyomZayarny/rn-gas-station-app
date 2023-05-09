import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackIcon} from '../icons/BackIcon';
import {BurgerIcon} from '../icons/BurgerIcon';
import {Colors} from '../../colors';

type Props = {
  title?: string;
  burger?: boolean;
  backButton?: boolean;
};

const AuthHeader = ({title, burger = false, backButton = false}: Props) => {
  return (
    <View style={styles.container}>
      {backButton && <BackIcon />}
      <Text style={styles.text}>{title}</Text>
      {burger && <BurgerIcon />}
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
