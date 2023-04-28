import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';

type Props = {
  children: React.ReactNode;
};

export const HomeScreen = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/images/home_bg.png')}>
        <SafeAreaView>{children}</SafeAreaView>
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
