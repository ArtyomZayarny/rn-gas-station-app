/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {HomeScreen} from './src/screens/Home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SideBar} from './src/ui/components/SideBar';
import {ProfileScreen} from './src/screens/ProfileScreen';
import {RegistrationScreen} from './src/screens/RegistrationScreen';
import {AuthContextProvider} from './src/context/AuthContext';

export type RootStackParamsList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <SideBar />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default App;
