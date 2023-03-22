import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {commonStyle} from '../../style/commonStyle';
import {AttendanceScreenConstant} from '../../utils/constant';
import Button from '../../components/Button';
import {CalendarList} from 'react-native-calendars';
import {currentDate} from '../../utils';
import colors from '../../utils/colors';
import {fontStyle} from '../../style/fontStyle';
import {StaffScreenConstant} from '../../utils/constant';

const AttendanceScreen = () => {
  const [date, setDate] = useState(currentDate());
  const [dateModal, setDateModal] = useState(false);
  const [staffDetails, setStaffDetails] = useState(
    StaffScreenConstant.staffDetails,
  );

  const handleStaffCardDetailButton = (id, status) => {
    const sd = staffDetails.map(item => {
      if (item.id === id) {
        item.status = status;
        return item;
      } else {
        return item;
      }
    });

    setStaffDetails(sd);
  };

  const renderStaffDetailCard = item => {
    return (
      <View style={styles.staffDetailsCard}>
        <View style={styles.staffDetailsCardTitleContainer}>
          <Text style={[fontStyle.body1]}>
            {AttendanceScreenConstant.nameLabel} : {item.name}
          </Text>
          {item.status === '' ? (
            <Text style={[fontStyle.body4]}>
              {AttendanceScreenConstant.notMarked}
            </Text>
          ) : (
            <Text
              onPress={() => handleStaffCardDetailButton(item.id, '')}
              style={[fontStyle.body4]}>
              {AttendanceScreenConstant.reset}
            </Text>
          )}
        </View>
        <View style={styles.staffDetailsButtonContainer}>
          <Button
            title={AttendanceScreenConstant.present}
            variant={item.status === 'present' ? '' : 'filled'}
            containerStyle={styles.staffDetailsButton}
            buttonClick={() => handleStaffCardDetailButton(item.id, 'present')}
          />
          <Button
            variant={item.status === 'halfday' ? '' : 'filled'}
            title={AttendanceScreenConstant.halfDay}
            containerStyle={styles.staffDetailsButton}
            buttonClick={() => handleStaffCardDetailButton(item.id, 'halfday')}
          />
          <Button
            title={AttendanceScreenConstant.absent}
            variant={item.status === 'absent' ? '' : 'filled'}
            containerStyle={styles.staffDetailsButton}
            buttonClick={() => handleStaffCardDetailButton(item.id, 'absent')}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.attendanceScreen}>
      {/* <Text style={[commonStyle.titleStyle]}>
        {AttendanceScreenConstant.title}
      </Text> */}
      {dateModal && (
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
                container: styles.calendarCustomContainerStyle,
                text: styles.calendarCustomContainerStylecalendarCustomTextStyle,
              },
            },
          }}
        />
      )}
      {!dateModal && (
        <View style={styles.attendaceDetailContainer}>
          <Text
            style={[fontStyle.h12, styles.date]}
            onPress={() => setDateModal(true)}>
            {date}
          </Text>
          <View style={styles.staffDetailCardContainer}>
            <Text style={[fontStyle.body3, styles.staffDetailsContainerTitle]}>
              {AttendanceScreenConstant.staffDetails}
            </Text>
            <FlatList
              bounces={true}
              showsVerticalScrollIndicator={false}
              data={staffDetails}
              renderItem={({item}) => renderStaffDetailCard(item)}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default AttendanceScreen;

const styles = StyleSheet.create({
  calendarCustomContainerStyle: {
    backgroundColor: colors.gray1000,
    borderWidth: 1,
    borderRadius: 8,
  },
  calendarCustomTextStyle: {
    color: colors.gray50,
    fontWeight: 'bold',
  },
  staffDetailsContainerTitle: {
    color: colors.gray500,
    borderBottomColor: colors.gray1000,
    borderBottomWidth: 1,
    paddingHorizontal: 4,
  },
  staffDetailsButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  staffDetailsButtonContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  staffDetailsCard: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginVertical: 8,
    backgroundColor: colors.gray1000,
  },
  staffDetailsCardTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 4,
  },
  date: {
    color: colors.gray1000,
    textAlign: 'center',
    marginVertical: 8,
  },
  attendanceScreen: {
    flex: 1,
    backgroundColor: colors.gray100,
    paddingTop: 8,
  },
  attendaceDetailContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  staffDetailCardContainer: {flex: 1},
});
