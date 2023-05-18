import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {BirthDaySection} from '../BirthDaySection';
import {Button} from '../../ui/components/Button';
import {LogoIcon} from '../../ui/icons/LogoIcon';
import {RegistrationStep} from '../../constants';
import {UserDetails} from '../UserDetails';
import {CodeVerification} from './CodeVerification';
import {PhoneRegistration} from './PhoneRegistration';
import {Colors} from '../../colors';
import {useRegistrationContent} from '../../context/RegistrationContext';

export const RegistrationContent = () => {
  const {registrationNextHandler, step} = useRegistrationContent();

  const registrationContent = useCallback(() => {
    switch (step) {
      case RegistrationStep.PHONE:
        return <PhoneRegistration />;
      case RegistrationStep.CODE:
        return (
          <>
            <PhoneRegistration />
            <CodeVerification />
          </>
        );
      case RegistrationStep.INFO:
        return <UserDetails />;
    }
  }, [step]);

  return (
    <View>
      <View style={styles.titleWrap}>
        <View style={styles.logoWrap}>
          <LogoIcon />
        </View>
        <Text style={styles.text}>ПРОЦЕС реєстраціЇ</Text>
      </View>
      <View style={styles.contentWrap}>
        {registrationContent()}
        {RegistrationStep.DATE === step && <BirthDaySection />}
        {step !== RegistrationStep.DATE && (
          <Button
            title="ДАЛІ"
            style={styles.next}
            onPress={registrationNextHandler}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  next: {
    paddingVertical: 8,
  },

  label: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.black1,
    fontFamily: 'NotoSans-Bold',
    marginBottom: 12,
  },
  contentWrap: {
    paddingHorizontal: 22,
  },
  inputWrap: {
    width: '100%',
    position: 'relative',
    marginBottom: 40,
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
    paddingLeft: 45,
    letterSpacing: 0.6,
  },
  logoWrap: {
    marginBottom: 40,
  },
  titleWrap: {
    alignItems: 'center',
    marginBottom: 38,
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    fontWeight: '400',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: Colors.black1,
  },
});
