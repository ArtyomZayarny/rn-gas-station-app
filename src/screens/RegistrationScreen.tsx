import React from 'react';
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
import {TextInput} from 'react-native-gesture-handler';
import {Colors} from '../colors';
import {Button} from '../ui/components/Button';
import {Label} from '../ui/components/Label';
import {CodeSection} from '../ui/components/CodeSection';
import {Input} from '../ui/components/Input';

export const RegistrationScreen = () => {
  const FlagIcon = () => (
    <Image
      style={{
        position: 'absolute',
        top: 11,
        left: 12,
        zIndex: 1,
      }}
      source={require('../../assets/flag.png')}
    />
  );

  return (
    <ScreenWithBack>
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <AuthHeader />
          <View style={styles.titleWrap}>
            <View style={styles.logoWrap}>
              <LogoIcon />
            </View>
            <Text style={styles.text}>ПРОЦЕС реєстраціЇ</Text>
          </View>
          <View style={styles.contentWrap}>
            <Label>Введіть Ваш номер телефону</Label>
            <Input
              icon={<FlagIcon />}
              keyboardType="numeric"
              styleWrap={styles.inputWrap}
              inputStyle={styles.input}
            />
            <CodeSection />
            <Button title="ДАЛІ" style={styles.next} />
          </View>
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
