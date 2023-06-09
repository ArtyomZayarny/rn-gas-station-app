import {View} from 'react-native';
import React, {useCallback} from 'react';
import {MenuItem} from './MenuItem';
import {IMenuItem} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks';

type Props = {
  menu: IMenuItem[];
};

export const MenuList = ({menu}: Props) => {
  const navigation = useNavigation();

  const linkNavigateHandler = () => {
    navigation.navigate('Profile');
  };

  return (
    <View>
      {menu.map(menuItem => (
        <MenuItem
          key={menuItem.id}
          title={menuItem.title}
          iconLabel={menuItem.icon}
          onPress={linkNavigateHandler}
        />
      ))}
    </View>
  );
};

export default MenuList;
