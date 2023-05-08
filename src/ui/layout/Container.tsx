import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  style?: ViewStyle;
  children: React.ReactNode;
  bordered?: boolean;
};

export const Container = ({style, children, bordered}: Props) => {
  return (
    <View style={StyleSheet.flatten([style, bordered && styles.bordered])}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  bordered: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
  },
});
