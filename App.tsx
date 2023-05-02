/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {HomeScreen} from './src/screens/Home/HomeScreen';
import {Text, View} from 'react-native';
import {BellIcon} from './src/screens/Home/ui/icons/BellIcon';

import {BurgerIcon} from './src/screens/Home/ui/icons/BurgerIcon';
import {Logo} from './src/screens/Home/ui/components/Logo';
import {Heder} from './src/screens/Home/ui/components/Heder';
import {Slider} from './src/screens/Home/ui/components/Slider';
import {Section} from './src/screens/Home/ui/components/Section';
import {Block} from './src/screens/Home/ui/components/Block';

function App(): JSX.Element {
  return (
    <HomeScreen>
      {/* Inner Container */}

      <View style={{paddingHorizontal: 22}}>
        {/* Header */}
        <Heder>
          <BellIcon />
          <Logo />
          <BurgerIcon />
        </Heder>

        {/* Slider section */}
        <Slider />

        {/* Sales section */}

        {/* TODO Make reuseable component title with container name Section */}
        {/* TODO Make reuseable component recieve child (icon/text/styles) name: Block */}
        <Section title="Слідкуй за знижками">
          <Block />
        </Section>
        {/* TODO Make reuseable component container reciever title and childrena */}
        <View>
          <View>
            <Text>Отримати персональну знижку</Text>
          </View>
          <View>
            <View>
              <Text>Придбати пальне</Text>
            </View>
            <View>
              <Text>Ціни на пальне</Text>
            </View>
          </View>
        </View>

        {/*  Card section  */}
        <View>
          <Text>Паливна картка</Text>
        </View>
        {/* use reuseable compoentnt Block */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>icon</Text>
          <Text>1205.80 грн</Text>
          <Text>Code</Text>
        </View>

        {/* Map section */}
        {/* TODO use reuseable component Section*/}
        <View>
          <Text>Карта АЗК САН</Text>
        </View>
      </View>
    </HomeScreen>
  );
}

export default App;
