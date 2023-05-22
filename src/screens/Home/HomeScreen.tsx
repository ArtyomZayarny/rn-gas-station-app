import React from 'react';
import {Image, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Heder} from '../../ui/components/Heder';
import {BellIcon} from '../../ui/icons/BellIcon';
import {Logo} from '../../ui/components/Logo';
import {BurgerIcon} from '../../ui/icons/BurgerIcon';
import {Slider} from '../../ui/components/Slider';
import {Section} from '../../ui/components/Section';
import {Container} from '../../ui/layout/Container';
import {Block} from '../../ui/components/Block';
import PercentIcon from '../../ui/icons/PercentIcon';
import {TicketIcon} from '../../ui/icons/ticketIcon';
import {PetrolIcon} from '../../ui/icons/PetrolIcon';
import {CardIcon} from '../../ui/icons/CardIcon';
import {ScreenWithBack} from '../../ui/layout/ScreenWithBack';

export const HomeScreen = () => {
  const code = require('../../../assets/images/code.png');

  return (
    <ScrollView>
      <ScreenWithBack>
        <SafeAreaView>
          <Container style={{paddingHorizontal: 22}}>
            {/* Header */}
            <Heder>
              <BellIcon />
              <Logo />
              <BurgerIcon />
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
      </ScreenWithBack>
    </ScrollView>
  );
};
