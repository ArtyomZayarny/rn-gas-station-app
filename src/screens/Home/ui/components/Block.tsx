import {StyleSheet, View} from 'react-native';
import React from 'react';
import PercentIcon from '../icons/PercentIcon';
import {Title} from './Title';
import {IconWrap} from '../icons/IconWrap';

//TODO add props Icon and content
export const Block = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.contentWrap}>
        <IconWrap>
          <PercentIcon />
        </IconWrap>
        <Title style={styles.title}>Отримати персональну знижку</Title>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 12,
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
  },
});
