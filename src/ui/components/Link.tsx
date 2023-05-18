import {Text, TextStyle, View} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  style: TextStyle;
};

export const Link = ({children, style}: Props) => {
  return (
    <View>
      <Text style={style}>{children}</Text>
    </View>
  );
};
