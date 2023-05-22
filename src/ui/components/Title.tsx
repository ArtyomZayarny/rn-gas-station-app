import {StyleSheet, Text, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  children: string;
  style?: ViewStyle;
};

export const Title = ({children, style}: Props) => {
  return (
    <Text style={StyleSheet.flatten([styles.title, style])}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'NotoSans-Bold',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
  },
});
