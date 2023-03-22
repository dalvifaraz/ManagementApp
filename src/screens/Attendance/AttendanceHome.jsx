import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StaffScreen from './StaffScreen';
import SettingsScreen from './SettingsScreen';
import AttendanceScreen from './AttendanceScreen';
import colors from '../../utils/colors';
import Help from './Help';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './Profile';
import About from './About';
import Contact from './Contact';
import Language from './Language';
import Theme from './Theme';
import StaffDetailScreen from './StaffDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Settings() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.gray100,
        },
      }}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Theme" component={Theme} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

function Staff() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.gray100,
        },
      }}>
      <Stack.Screen name="StaffScreen" component={StaffScreen} />
      <Stack.Screen name="StaffDetail" component={StaffDetailScreen} />
    </Stack.Navigator>
  );
}

const AttendanceHome = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={
          {
            // headerShown: false,
            // headerStyle: {
            //   backgroundColor: colors.gray100,
            // },
          }
        }>
        <Tab.Screen name="Staff" component={Staff} />
        <Tab.Screen name="Attendance" component={AttendanceScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </>
  );
};

export default AttendanceHome;

const styles = StyleSheet.create({});
