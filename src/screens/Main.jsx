import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const Main = () => {
  return (
    <View>
      <Text style={styles.headerTitle}>Main</Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  headerTitle: {
    color: colors.gray50,
  },
});
