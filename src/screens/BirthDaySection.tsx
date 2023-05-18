import React from 'react';
import DatePicker from 'react-native-date-picker';
import {Label} from '../ui/components/Label';
import {Input} from '../ui/components/Input';
import moment from 'moment';
import {Button} from '../ui/components/Button';
import {StyleSheet, View} from 'react-native';
import {useRegistrationContent} from '../context/RegistrationContext';
import {Terms} from '../ui/components/Terms';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const BirthDaySection = () => {
  const {registrationNextHandler, date, setDate} = useRegistrationContent();
  return (
    <View>
      <Label>Дата народження</Label>
      <Input setValue={() => {}} value={moment(date).format('D.MM.YYYY')} />
      <Terms />
      <Button
        title="ДАЛІ"
        style={styles.next}
        onPress={registrationNextHandler}
      />
      <View>
        <DatePicker
          date={date}
          mode={'date'}
          onDateChange={setDate}
          style={{width: windowWidth}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  next: {
    paddingVertical: 8,
    marginBottom: 40,
  },
});
