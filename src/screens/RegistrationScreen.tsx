import React, {useCallback, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScreenWithBack} from '../ui/layout/ScreenWithBack';
import {LogoIcon} from '../ui/registration/logoIcon';
import AuthHeader from '../ui/components/AuthHeader';
import {Colors} from '../colors';
import {Button} from '../ui/components/Button';
import {Label} from '../ui/components/Label';
import {CodeSection, CodeVerification} from './Registration/CodeVerification';
import {Input} from '../ui/components/Input';
import {isPhoneValid} from '../utils';
import {UserDetails} from './UserDetails';
import {BirthDaySection} from './BirthDaySection';
import {PhoneRegistration} from './Registration/PhoneRegistration';

export const RegistrationScreen = () => {
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');
  const [phoneValid, setPhoneValid] = useState(true);
  const [codeSmsTaken, setCodeSmsTaken] = useState(false);
  const [code, setCode] = useState(false);
  const [confirmedCode, setConfirmedCode] = useState(false);
  const [name, setName] = useState('');
  const [sureName, setSureName] = useState('');
  const [showDate, setDate] = useState(false);

  const handleCheckPhone = useCallback(() => {
    if (isPhoneValid(phone)) {
      setCodeSmsTaken(true);
    } else {
      //set phone error
      setPhoneValid(false);
    }
  }, [phone]);

  const checkSmsCode = useCallback((code: boolean) => {
    setCode(code);
  }, []);

  const nextToUserInfo = useCallback(() => {
    setConfirmedCode(true);
  }, []);

  const nextToBirthDay = () => {
    setDate(true);
  };

  const registrationContent = () => {
    switch (step) {
      case 'phone':
        return <PhoneRegistration />;
      case 'code':
        return <CodeVerification confirmSmsCode={checkSmsCode} />;
      case 'info':
        return (
          <UserDetails
            name={name}
            setName={setName}
            sureName={sureName}
            setSureName={setSureName}
          />
        );
    }
  };

  const registrationNextHandler = () => {
    if (name && sureName) {
      return nextToBirthDay;
    }
    return codeSmsTaken && code ? nextToUserInfo : handleCheckPhone;
  };

  return (
    <ScreenWithBack>
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <AuthHeader backButton={codeSmsTaken} />
          <View style={styles.titleWrap}>
            <View style={styles.logoWrap}>
              <LogoIcon />
            </View>
            <Text style={styles.text}>ПРОЦЕС реєстраціЇ</Text>
          </View>
          <View style={styles.contentWrap}>
            {registrationContent()}
            <Button
              title="ДАЛІ"
              style={styles.next}
              onPress={registrationNextHandler()}
            />
          </View>
          {step === 'date' && <BirthDaySection />}
        </KeyboardAvoidingView>
      </ScrollView>
    </ScreenWithBack>
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
