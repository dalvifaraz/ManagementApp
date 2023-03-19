import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonStyle} from '../../style/commonStyle';
import {AttendanceScreenConstant} from '../../utils/constant';

const AttendanceScreen = () => {
  return (
    <View style={commonStyle.backgroundStyle}>
      <Text style={[commonStyle.titleStyle]}>
        {AttendanceScreenConstant.title}
      </Text>
    </View>
  );
};

export default AttendanceScreen;

const styles = StyleSheet.create({});
