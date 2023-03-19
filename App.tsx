/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AttendanceHome from './src/screens/Attendance/AttendanceHome';
import Compoents from './src/screens/Components/Compoents';
import Default from './src/screens/Default/Default';
import Irctc from './src/screens/IRCTC/Irctc';
import Main from './src/screens/Main';
import colors from './src/utils/colors';
import {NavigationRoutes} from './src/utils/constant';

function App(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <View style={styles.appContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={NavigationRoutes.Main} component={Main} />
          <Stack.Screen
            name={NavigationRoutes.AttendanceHome}
            component={AttendanceHome}
            options={{title: 'Attendace'}}
          />
          <Stack.Screen name={NavigationRoutes.IRCTC} component={Irctc} />
          <Stack.Screen name={NavigationRoutes.Default} component={Default} />
          <Stack.Screen
            name={NavigationRoutes.Components}
            component={Compoents}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.gray900,
  },
});

export default App;
