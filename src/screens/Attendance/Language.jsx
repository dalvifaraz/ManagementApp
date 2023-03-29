import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LanguageScreenConstant} from '../../utils/constant';
import List from '../../components/List';

const Language = () => {
  return (
    <View>
      {LanguageScreenConstant.list.map((item, index) => {
        return (
          <List
            name={item.name}
            index={index}
            length={LanguageScreenConstant.list.length}
            type="switch"
            switchValue={item.selected}
            // handleOnPress={() => handleNavigation(item.navigation)}
          />
        );
      })}
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({});
