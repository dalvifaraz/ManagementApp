/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Main from './src/screens/Main';
import colors from './src/utils/colors';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.gray900,
  },
});

export default App;
