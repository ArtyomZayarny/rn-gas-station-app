import {
  KeyboardTypeOptions,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {ClearIcon} from '../icons/ClearIcon';
import PencilIcon from '../icons/PencilIcon';

type Props = {
  icon?: JSX.Element;
  keyboardType: KeyboardTypeOptions;
  styleWrap?: ViewStyle;
  inputStyle?: ViewStyle;
  maxLength?: number;
};

export const Input = ({
  keyboardType,
  icon,
  styleWrap,
  inputStyle,
  maxLength,
}: Props) => {
  const [value, setValue] = useState('');
  const [onBlur, setOnBlur] = useState(false);
  return (
    <View style={styleWrap}>
      {icon && icon}
      <TextInput
        style={inputStyle}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={newText => setValue(newText)}
        value={value}
        onBlur={() => setOnBlur(true)}
        onFocus={() => setOnBlur(false)}
      />
      {icon && value.length > 0 && (
        <TouchableOpacity
          style={{position: 'absolute', right: 11, top: 12}}
          onPress={() => setValue('')}>
          {onBlur ? <PencilIcon /> : <ClearIcon />}
        </TouchableOpacity>
      )}
    </View>
  );
};
