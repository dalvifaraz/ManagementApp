import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonStyle} from '../../style/commonStyle';
import {SettingsScreenConstant} from '../../utils/constant';

const SettingsScreen = () => {
  return (
    <View style={commonStyle.backgroundStyle}>
      <Text style={[commonStyle.titleStyle]}>
        {SettingsScreenConstant.title}
      </Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
