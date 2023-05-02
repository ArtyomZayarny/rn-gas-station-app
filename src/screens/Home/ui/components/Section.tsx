import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Title} from './Title';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const Section = ({children, title}: Props) => {
  return (
    <View>
      {title && <Title style={styles.title}>{title}</Title>}
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 18,
  },
});
