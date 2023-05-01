import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LogoIcon} from '../LogoIcon';

export const Logo = () => {
  return (
    <View>
      <LogoIcon />
      <Text style={styles.logoText}>САН</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoText: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    textAlign: 'center',
  },
});
