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
import {Colors} from '../../colors';
import {Text} from 'react-native';

type Props = {
  phone?: boolean;
  icon?: JSX.Element;
  keyboardType?: KeyboardTypeOptions;
  styleWrap?: ViewStyle;
  inputStyle?: ViewStyle;
  maxLength?: number;
  value: string;
  isValid?: boolean;
  setValue: (v: string) => void;
  setValid?: (b: boolean) => void;
  withMask?: boolean;
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
  withMask = false,
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
      {withMask && (
        <View style={styles.maskWrap}>
          {icon && icon}
          <Text style={styles.mask}>+38</Text>
        </View>
      )}
      <TextInput
        style={StyleSheet.flatten([styles.input, inputStyle])}
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
  maskWrap: {
    position: 'relative',
    zIndex: 1,
    flexDirection: 'row',
  },
  mask: {
    position: 'absolute',
    left: 45,
    top: 12.5,
    zIndex: 1,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'NotoSans-Bold',
    color: Colors.black1,
  },
  input: {
    width: '100%',
    height: 44,
    backgroundColor: Colors.white1,
    borderRadius: 15,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'NotoSans-Bold',
    color: Colors.black1,
    paddingLeft: 13,
    letterSpacing: 0.6,
  },
  container: {
    marginBottom: 24,
  },
  inValid: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
