import {View, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  style?: ViewStyle;
  children: React.ReactNode;
};

export const Container = ({style, children}: Props) => {
  return <View style={style}>{children}</View>;
};
