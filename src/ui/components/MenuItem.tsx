import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconWrap} from '../icons/IconWrap';
import {Colors} from '../../colors';
import {IconType} from '../../constants';
import {TicketIcon} from '../icons/ticketIcon';
import {MapIcon} from '../icons/MapIcon';
import PercentIcon from '../icons/PercentIcon';
import {PriceIcon} from '../icons/PriceIcon';
import {UserIcon} from '../icons/UserIcon';

type Props = {
  title: string;
  iconLabel: IconType;
  onPress: () => void;
};
export const MenuItem = ({title, iconLabel, onPress}: Props) => {
  const mapIcon = (type: IconType) => {
    switch (type) {
      case IconType.USER:
        return <UserIcon />;
      case IconType.TICKET:
        return <TicketIcon />;
      case IconType.PRICE:
        return <PriceIcon />;
      case IconType.SALES:
        return <PercentIcon />;
      case IconType.MAP:
        return <MapIcon />;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <IconWrap>{mapIcon(iconLabel)}</IconWrap>
      <Text style={styles.itemText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  itemText: {
    color: Colors.white1,
    fontWeight: '600',
    marginLeft: 22,
    fontSize: 18,
    fontFamily: 'NotoSans-Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 2,
  },
});
