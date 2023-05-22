import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const ScreenWithBack = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/images/home_bg.png')}>
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
