import {Image, Pressable, StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';
import {fontStyle} from '../style/fontStyle';

const List = ({name, index, handleOnPress, type, length, switchValue}) => {
  return (
    <View
      key={index}
      style={[
        length - 1 !== index && {
          borderBottomColor: colors.gray200,
          borderBottomWidth: 2,
        },
        styles.listContainer,
      ]}>
      <Text style={[fontStyle.h4, styles.listTitle]}>{name}</Text>
      {type === 'navigation' && (
        <Pressable onPress={() => handleOnPress()}>
          <Image
            source={require('../images/backicon.png')}
            style={styles.arrow}
          />
        </Pressable>
      )}
      {type === 'switch' && <Switch disabled value={switchValue} />}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listTitle: {color: colors.gray1000},
  arrow: {height: 24, width: 24, transform: [{rotate: '180deg'}]},
});
