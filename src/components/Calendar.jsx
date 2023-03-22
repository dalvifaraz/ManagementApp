import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CalendarList} from 'react-native-calendars';

const Calendar = (today, day, setDay) => {
  return (
    <CalendarList
      pastScrollRange={12}
      futureScrollRange={0}
      minDate={'2021-03-02'}
      maxDate={currentDate()}
      onDayPress={day => {
        setDate(day.dateString);
        setDateModal(false);
      }}
      style={{marginHorizontal: 0}}
      markingType={'custom'}
      markedDates={{
        [date]: {
          customStyles: {
            container: {
              backgroundColor: colors.gray1000,
              borderWidth: 1,
              borderRadius: 8,
            },
            text: {
              color: colors.gray50,
              fontWeight: 'bold',
            },
          },
        },
      }}
    />
  );
};

export default Calendar;

const styles = StyleSheet.create({});
