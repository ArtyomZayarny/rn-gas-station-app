import {StyleSheet, View} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Heder = ({children}: Props) => {
  return <View style={styles.header}>{children}</View>;
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
