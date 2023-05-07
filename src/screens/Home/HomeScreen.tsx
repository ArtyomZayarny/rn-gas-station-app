import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Heder} from './ui/components/Heder';
import {BellIcon} from './ui/icons/BellIcon';
import {Logo} from './ui/components/Logo';
import {BurgerIcon} from './ui/icons/BurgerIcon';
import {Slider} from './ui/components/Slider';
import {Section} from './ui/components/Section';
import {Container} from './ui/layout/Container';
import {Block} from './ui/components/Block';
import PercentIcon from './ui/icons/PercentIcon';
import {TicketIcon} from './ui/icons/ticketIcon';
import {PetrolIcon} from './ui/icons/PetrolIcon';
import {CardIcon} from './ui/icons/CardIcon';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const code = require('../../../assets/images/code.png');
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/images/home_bg.png')}>
        <SafeAreaView>
          <Container style={{paddingHorizontal: 22}}>
            {/* Header */}
            <Heder>
              <BellIcon />
              <Logo />
              <BurgerIcon onPress={() => navigation.toggleDrawer()} />
            </Heder>

            {/* Slider section */}
            <Slider />

            {/* Sales section */}
            <Section title="Слідкуй за знижками">
              <Container>
                <Block
                  text="Отримати персональну знижку"
                  icon={<PercentIcon />}
                />
              </Container>
              <Container style={{flexDirection: 'row'}}>
                <Block
                  style={{width: '49%'}}
                  text="Придбати пальне"
                  icon={<TicketIcon />}
                />
                <Block
                  style={{width: '49%', marginLeft: 7}}
                  text="Ціни на пальне"
                  icon={<PetrolIcon />}
                />
              </Container>
            </Section>

            {/* Petrol card */}
            <Section title="Паливна картка">
              <Container>
                <Block
                  text="1205.80 грн"
                  textStyle={{fontSize: 18}}
                  icon={<CardIcon />}
                  code={code}
                />
              </Container>
            </Section>

            {/* Map section */}
            <Section title="Карта АЗК САН">
              <Container bordered>
                <Image
                  style={{width: '100%'}}
                  source={require('../../../assets/images/map.png')}
                />
              </Container>
            </Section>
          </Container>
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
