import {Svg, Path, Circle} from 'react-native-svg';
import React from 'react';

export const ClearIcon = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Circle cx="8" cy="8" r="8" fill="#00B488" />
      <Path
        d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
