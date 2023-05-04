import {StyleSheet, Image} from 'react-native';
import React from 'react';
import {Container} from '../layout/Container';

export const Slider = () => {
  return (
    <Container bordered style={styles.sliderWrap}>
      <Image
        style={styles.slide}
        source={require('../../../../../assets/images/save.png')}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  sliderWrap: {
    marginBottom: 18,
  },
  slide: {
    width: '100%',
  },
});
