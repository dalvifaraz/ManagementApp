import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonStyle} from '../../style/commonStyle';
import {AttendanceScreen, StaffScreenConstant} from '../../utils/constant';
import HorizontalCard from '../../components/HorizontalCard';
import Button from '../../components/Button';

const StaffScreen = () => {
  return (
    <View style={commonStyle.backgroundStyle}>
      <Button
        title="Add Staff"
        variant="filled"
        containerStyle={{marginVertical: 8}}
      />
      <Button title="Add Staff" containerStyle={{marginVertical: 8}} />
      <Text style={[commonStyle.titleStyle]}>{StaffScreenConstant.title}</Text>
      <HorizontalCard
        leftTitle="Staff Name: Faraz Dalvi"
        leftSubTitle="Status: Not Marked!"
        rightTitle="Total"
        rightSubContainerTitle="2000"
        rightSubContainerSubTitle="Advance"
      />
      <HorizontalCard
        leftTitle="Staff Name: AXAXS SFDAS"
        leftSubTitle="Status: Present!"
        rightTitle="Total"
        rightSubContainerTitle="2000"
        rightSubContainerSubTitle="Balance"
      />
      <HorizontalCard
        leftTitle="Staff Name: ASFDA vbxvc"
        leftSubTitle="Status: Absent!"
        rightTitle="Total"
        rightSubTitle="HELLO"
      />
      <HorizontalCard
        leftTitle="Staff Name: poj vtyu"
        leftSubTitle="Status: Not Marked!"
        // rightTitle="Total"
        // rightSubTitle="HELLO"
        rightSubContainerTitle="Welcome"
      />
    </View>
  );
};

export default StaffScreen;

const styles = StyleSheet.create({});
