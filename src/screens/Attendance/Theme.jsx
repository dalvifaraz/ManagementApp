import {StyleSheet, View} from 'react-native';
import React from 'react';
import List from '../../components/List';
import {ThemeScreenConstant} from '../../utils/constant';

const Theme = () => {
  return (
    <View>
      {ThemeScreenConstant.list.map((item, index) => {
        return (
          <List
            name={item.name}
            index={index}
            length={ThemeScreenConstant.list.length}
            type="switch"
            switchValue={item.selected}
            // handleOnPress={() => handleNavigation(item.navigation)}
          />
        );
      })}
    </View>
  );
};

export default Theme;

const styles = StyleSheet.create({});
