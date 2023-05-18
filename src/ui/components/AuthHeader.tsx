import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackIcon} from '../icons/BackIcon';
import {BurgerIcon} from '../icons/BurgerIcon';
import {Colors} from '../../colors';
import {useNavigation} from '@react-navigation/native';
import {useRegistrationContent} from '../../context/RegistrationContext';
import {RegistrationStep} from '../../constants';

type Props = {
  title?: string;
  burger?: boolean;
  backButton?: boolean;
};

const AuthHeader = ({title, burger = false, backButton = false}: Props) => {
  const {step, setStep} = useRegistrationContent();
  const navigation = useNavigation();

  const showBackRules = () => {
    let showBack = false;
    switch (step) {
      case RegistrationStep.CODE:
      case RegistrationStep.INFO:
      case RegistrationStep.DATE:
        showBack = true;
    }
    return showBack;
  };

  const handleBackNavigation = () => {
    switch (step) {
      case RegistrationStep.CODE:
        return setStep(RegistrationStep.PHONE);
      case RegistrationStep.INFO:
        return setStep(RegistrationStep.CODE);
      case RegistrationStep.DATE:
        return setStep(RegistrationStep.INFO);
    }
  };
  return (
    <View style={styles.container}>
      {showBackRules() && (
        <TouchableOpacity onPress={handleBackNavigation}>
          <BackIcon />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{title}</Text>
      {burger && <BurgerIcon />}
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingVertical: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black1,
    fontFamily: 'NotoSans-Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 2,
  },
});
