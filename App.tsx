/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {HomeScreen} from './src/screens/Home/HomeScreen';
import {Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <HomeScreen>
      {/* Inner Container */}
      <View style={{paddingHorizontal: 22}}>
        {/* Header */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Icon</Text>
          <Text>Icon</Text>
          <Text>Icon</Text>
        </View>

        {/* Slider section */}
        <View>
          <Text>Slider</Text>
        </View>

        {/* Sales section */}

        {/* TODO Make reuseable component title with container name Section */}
        <View>
          <Text>Слідкуй за знижками</Text>
        </View>
        {/* TODO Make reuseable component recieve child (icon/text/styles) name: Block */}
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
