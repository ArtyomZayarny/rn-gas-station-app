import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../colors';

type Props = {
  children: React.ReactNode;
  fill?: string;
};

export const IconWrap = ({children, fill = Colors.white1}: Props) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.circle,
        styles.shadow,
        {backgroundColor: fill},
      ])}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 33,
    height: 33,
    borderRadius: 33 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
});
