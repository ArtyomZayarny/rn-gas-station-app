import {StyleSheet, View} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const IconWrap = ({children}: Props) => {
  return <View style={styles.circle}>{children}</View>;
};

const styles = StyleSheet.create({
  circle: {
    width: 33,
    height: 33,
    borderRadius: 33 / 2,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
