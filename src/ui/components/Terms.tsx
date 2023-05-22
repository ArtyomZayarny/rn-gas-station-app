import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {Label} from './Label';

export const Terms = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <Label style={styles.label} underLined>
        Я погоджуюсь з правилами програми
      </Label>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    marginBottom: 0,
  },
});
