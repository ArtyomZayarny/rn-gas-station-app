import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Label} from '../ui/components/Label';
import {Input} from '../ui/components/Input';
import moment from 'moment';

export const BirthDaySection = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Label>Дата народження</Label>
      <Input setValue={() => {}} value={moment(date).format('D.MM.YYYY')} />
      <DatePicker date={date} mode={'date'} onDateChange={setDate} />
    </>
  );
};
