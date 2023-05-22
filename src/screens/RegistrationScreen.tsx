import React from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {ScreenWithBack} from '../ui/layout/ScreenWithBack';
import AuthHeader from '../ui/components/AuthHeader';

import {RegistrationContextProvider} from '../context/RegistrationContext';
import {RegistrationContent} from './Registration/RegistrationContent';

export const RegistrationScreen = () => {
  return (
    <RegistrationContextProvider>
      <ScreenWithBack>
        <ScrollView>
          <KeyboardAvoidingView behavior="position">
            <AuthHeader />
            <RegistrationContent />
          </KeyboardAvoidingView>
        </ScrollView>
      </ScreenWithBack>
    </RegistrationContextProvider>
  );
};
