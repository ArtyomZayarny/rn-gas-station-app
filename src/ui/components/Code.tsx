import {Image, ImageSourcePropType} from 'react-native';
import React from 'react';

type Props = {
  code: ImageSourcePropType;
};

export const Code = ({code}: Props) => {
  return (
    <>
      <Image source={code} />
    </>
  );
};
