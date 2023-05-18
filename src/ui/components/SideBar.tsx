import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../colors';
import {menu} from '../../menu';
import SignOutLink from './SignOutLink';
import MenuList from './MenuList';
import {useAuth} from '../../hooks';

export const SideBar = () => {
  const {isAuth} = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <MenuList menu={menu} />
      {isAuth && <SignOutLink />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    flex: 1,
    justifyContent: 'center',
    padding: 28,
  },
});
