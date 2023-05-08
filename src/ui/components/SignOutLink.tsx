import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ArrowIcon} from '../icons/ArrowIcon';
import {Colors} from '../../colors';

export const SignOutLink = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Вийти</Text>
      <ArrowIcon />
    </View>
  );
};

export default SignOutLink;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 60,
    position: 'absolute',
  },
  text: {
    color: Colors.white1,
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 28,
    fontFamily: 'NotoSans-Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 2,
    marginRight: 16,
  },
});
