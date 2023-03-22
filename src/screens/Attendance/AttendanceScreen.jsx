import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
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
  const [staffDetails, setStaffDetails] = useState([]);
  useEffect(() => {
    setStaffDetails(StaffScreenConstant.staffDetails);
  }, []);
  return (
    <View
      style={{flex: 1, backgroundColor: colors.gray100, marginHorizontal: 0}}>
      <Text style={[commonStyle.titleStyle]}>
        {AttendanceScreenConstant.title}
      </Text>
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
      )}
      {!dateModal && (
        <View
          style={{
            flex: 1,
            // alignItems: 'center',
            marginHorizontal: 16,
          }}>
          <Text
            style={[
              fontStyle.h12,
              {
                color: colors.gray1000,
                textAlign: 'center',
              },
            ]}
            onPress={() => setDateModal(true)}>
            {date}
          </Text>
          <View style={{marginTop: 16, flex: 1}}>
            <Text
              style={[
                fontStyle.body3,
                {
                  color: colors.gray500,
                  borderBottomColor: colors.gray1000,
                  borderBottomWidth: 1,
                  paddingHorizontal: 4,
                },
              ]}>
              Staff Details
            </Text>
            <FlatList
              bounces={true}
              showsVerticalScrollIndicator={false}
              data={staffDetails}
              renderItem={({item}) => (
                <View
                  style={{
                    borderRadius: 8,
                    paddingHorizontal: 8,
                    paddingVertical: 8,
                    marginVertical: 8,
                    backgroundColor: colors.gray1000,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 8,
                      marginHorizontal: 4,
                    }}>
                    <Text style={[fontStyle.body1]}>Name : {item.name}</Text>
                    {item.status === '' && (
                      <Text style={[fontStyle.body4]}>not marked*</Text>
                    )}
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 8,
                    }}>
                    <Button
                      title="Present"
                      variant={item.status === 'present' ? '' : 'filled'}
                      containerStyle={{flex: 1, marginHorizontal: 4}}
                    />
                    <Button
                      variant={item.status === 'halfday' ? '' : 'filled'}
                      title="Half-Day"
                      containerStyle={{flex: 1, marginHorizontal: 4}}
                    />
                    <Button
                      title="Absent"
                      variant={item.status === 'absent' ? '' : 'filled'}
                      containerStyle={{
                        flex: 1,
                        marginHorizontal: 4,
                      }}
                    />
                  </View>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default AttendanceScreen;

const styles = StyleSheet.create({});
