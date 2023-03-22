import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonStyle} from '../../style/commonStyle';
import {
  SettingsScreenConstant,
  StaffScreenConstant,
} from '../../utils/constant';
import colors from '../../utils/colors';
import {fontStyle} from '../../style/fontStyle';

const SettingsScreen = () => {
  const renderList = (item, index) => {
    return (
      <View
        style={[
          SettingsScreenConstant.list.length - 1 !== index && {
            borderBottomColor: colors.gray200,
            borderBottomWidth: 2,
          },
          styles.listContainer,
        ]}>
        <Text style={[fontStyle.h4, styles.listTitle]}>{item.name}</Text>
        <Pressable>
          <Image
            source={require('../../images/backicon.png')}
            style={styles.arrow}
          />
        </Pressable>
      </View>
    );
  };
  return (
    <View style={[commonStyle.backgroundStyle, styles.settingContainer]}>
      {SettingsScreenConstant.list.map((item, index) => {
        return renderList(item, index);
      })}
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  settingContainer: {
    marginHorizontal: 0,
  },
  listContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listTitle: {color: colors.gray1000},
  arrow: {height: 24, width: 24, transform: [{rotate: '180deg'}]},
});
