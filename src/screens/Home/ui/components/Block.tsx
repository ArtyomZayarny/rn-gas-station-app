import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {Title} from './Title';
import {IconWrap} from '../icons/IconWrap';

type Props = {
  icon: JSX.Element;
  text: string;
  style?: ViewStyle;
};

export const Block = ({icon, text, style}: Props) => {
  return (
    <View style={StyleSheet.flatten([styles.wrapper, style])}>
      <View style={styles.contentWrap}>
        <IconWrap>{icon}</IconWrap>
        <Title style={styles.title}>{text}</Title>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 12,
    flexWrap: 'wrap',
    flex: 1,
  },
  contentWrap: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 13,
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: '#FCFFFE',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FCFFFE',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 10},
    shadowOpacity: 0.05,
    elevation: 1,
    marginBottom: 18,
  },
});
