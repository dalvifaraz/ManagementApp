import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StaffScreen from './StaffScreen';
import SettingsScreen from './SettingsScreen';
import AttendanceScreen from './AttendanceScreen';
import colors from '../../utils/colors';

const Tab = createBottomTabNavigator();

const AttendanceHome = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Staff" component={StaffScreen} />
        <Tab.Screen name="Attendance" component={AttendanceScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
};

export default AttendanceHome;

const styles = StyleSheet.create({});
