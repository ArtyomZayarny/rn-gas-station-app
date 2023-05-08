import {View} from 'react-native';
import React from 'react';
import {MenuItem} from './MenuItem';
import {IMenuItem} from '../../types';

type Props = {
  menu: IMenuItem[];
};

export const MenuList = ({menu}: Props) => {
  return (
    <View>
      {menu.map(menuItem => (
        <MenuItem
          key={menuItem.id}
          title={menuItem.title}
          iconLabel={menuItem.icon}
        />
      ))}
    </View>
  );
};

export default MenuList;
