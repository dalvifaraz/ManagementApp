import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonStyle} from '../../style/commonStyle';
import {SettingsScreenConstant} from '../../utils/constant';
import colors from '../../utils/colors';
import List from '../../components/List';

const SettingsScreen = ({navigation}) => {
  const handleNavigation = name => {
    navigation.navigate(name);
  };
  return (
    <View style={[commonStyle.backgroundStyle, styles.settingContainer]}>
      {SettingsScreenConstant.list.map((item, index) => {
        return (
          <List
            name={item.name}
            index={index}
            handleOnPress={() => handleNavigation(item.navigation)}
          />
        );
      })}
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  settingContainer: {
    marginHorizontal: 0,
  },
});
