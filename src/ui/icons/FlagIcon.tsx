import {Image} from 'react-native';
import React from 'react';

export const FlagIcon = () => (
  <Image
    style={{
      position: 'absolute',
      top: 11,
      left: 12,
      zIndex: 1,
    }}
    source={require('../../../assets/flag.png')}
  />
);
