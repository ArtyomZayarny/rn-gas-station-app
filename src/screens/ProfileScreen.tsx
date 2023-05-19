import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import AuthHeader from '../ui/components/AuthHeader';
import {NeedRegister} from '../ui/components/NeedRegister';
import {Text} from 'react-native';
import {useAuth} from '../hooks';

export const ProfileScreen = () => {
  const {isAuth} = useAuth();

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/images/home_bg.png')}>
        <AuthHeader title="Мій кабінет" burger backButton />
        <View style={{borderTopLeftRadius: 15, borderTopEndRadius: 15}}>
          {!isAuth ? <NeedRegister /> : <Text>User registered</Text>}
        </View>
      </ImageBackground>
    </ScrollView>
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
