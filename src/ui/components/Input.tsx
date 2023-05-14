import {
  KeyboardTypeOptions,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {ClearIcon} from '../icons/ClearIcon';
import PencilIcon from '../icons/PencilIcon';

type Props = {
  phone?: boolean;
  icon?: JSX.Element;
  keyboardType: KeyboardTypeOptions;
  styleWrap?: ViewStyle;
  inputStyle?: ViewStyle;
  maxLength?: number;
  value: string;
  isValid?: boolean;
  setValue: (v: string) => void;
  setValid?: (b: boolean) => void;
};

export const Input = ({
  phone = false,
  keyboardType,
  icon,
  styleWrap,
  inputStyle,
  maxLength,
  setValue,
  isValid = true,
  value,
  setValid,
}: Props) => {
  const [onBlur, setOnBlur] = useState(false);

  const handleOnBlur = useCallback(() => {
    setOnBlur(true);
    setValid && setValid(true);
  }, [setValid]);

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        styleWrap,
        phone && !isValid && styles.inValid,
      ])}>
      {icon && icon}
      <TextInput
        style={inputStyle}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={newText => {
          setValue(newText);
          setValid && setValid(true);
        }}
        value={value}
        onBlur={handleOnBlur}
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

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  inValid: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
