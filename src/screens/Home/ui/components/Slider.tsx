import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

export const Slider = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.slide}
        source={require('../../../../../assets/images/slide.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 18,
  },
  slide: {
    width: '100%',
  },
});
