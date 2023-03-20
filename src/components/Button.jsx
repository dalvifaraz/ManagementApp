import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import {fontStyle} from '../style/fontStyle';

const Button = ({
  variant,
  title,
  containerStyle,
  titleStyle,
  buttonClick,
  disable,
}) => {
  return (
    <View style={containerStyle}>
      <Pressable
        disabled={disable}
        onPress={buttonClick}
        style={[
          styles.buttonContainerStyle,
          variant === 'filled' && styles.filledButtonContainerStyle,
        ]}>
        <Text
          style={[
            fontStyle.h1,
            styles.buttonNameStyle,
            variant === 'filled' && styles.filledButtonNameStyle,
            titleStyle,
          ]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonNameStyle: {
    color: colors.gray1000,
  },
  filledButtonNameStyle: {
    color: colors.gray50,
  },
  buttonContainerStyle: {
    borderColor: colors.gray1000,
    backgroundColor: colors.gray50,
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 8,
  },
  filledButtonContainerStyle: {
    borderColor: colors.gray50,
    backgroundColor: colors.gray1000,
  },
});
