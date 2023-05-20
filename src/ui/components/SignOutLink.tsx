import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ArrowIcon} from '../icons/ArrowIcon';
import {Colors} from '../../colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAuthContext} from '../../context/AuthContext';

export const SignOutLink = () => {
  const {removeValue} = useAuthContext();

  const handleSignOut = async () => {
    await removeValue();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut}>
        <Text style={styles.text}>Вийти</Text>
      </TouchableOpacity>

      <ArrowIcon />
    </View>
  );
};

export default SignOutLink;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 60,
    position: 'absolute',
  },
  text: {
    color: Colors.white1,
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 28,
    fontFamily: 'NotoSans-Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 2,
    marginRight: 16,
  },
});
