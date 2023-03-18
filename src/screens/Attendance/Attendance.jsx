import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonStyle} from '../../style/commonStyle';
import {AttendanceScreen} from '../../utils/constant';

const Attendance = () => {
  return (
    <View style={commonStyle.backgroundStyle}>
      <Text style={[commonStyle.titleStyle]}>
        {AttendanceScreen.attendanceScreenTitle}
      </Text>
    </View>
  );
};

export default Attendance;

const styles = StyleSheet.create({});
