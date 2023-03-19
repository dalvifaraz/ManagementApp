import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import {fontStyle} from '../style/fontStyle';

const HorizontalCard = ({
  containerStyle,
  leftContainerStyle,
  leftTitleStyle,
  leftSubTitleStyle,
  leftTitle,
  leftSubTitle,
  rightContainerStyle,
  rightSubContainerStyle,
  rightTitle,
  rightTitleStyle,
  rightSubTitle,
  rightSubTitleStyle,
  rightSubContainerTitle,
  rightSubContainerTitleStyle,
  rightSubContainerSubTitle,
  rightSubContainerSubTitleStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.leftContainer, leftContainerStyle]}>
        <Text style={[fontStyle.h2, styles.title, leftTitleStyle]}>
          {leftTitle}
        </Text>
        <Text style={[fontStyle.body2, styles.subTitle, leftSubTitleStyle]}>
          {leftSubTitle}
        </Text>
      </View>
      <View style={[styles.rightContainer, rightContainerStyle]}>
        <Text style={[fontStyle.h2, styles.title, rightTitleStyle]}>
          {rightTitle}
        </Text>
        {rightSubTitle?.length && (
          <Text style={[fontStyle.body2, styles.subTitle, rightSubTitleStyle]}>
            {rightSubTitle}
          </Text>
        )}
        {(rightSubContainerTitle?.length ||
          rightSubContainerSubTitle?.length) && (
          <View style={[styles.rightSubContainer, rightSubContainerStyle]}>
            <Text style={[fontStyle.body2, rightSubContainerTitleStyle]}>
              {rightSubContainerTitle}
            </Text>
            <Text style={[fontStyle.body2, rightSubContainerSubTitleStyle]}>
              {rightSubContainerSubTitle}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default HorizontalCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray1000,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    marginVertical: 8,
  },
  title: {
    color: colors.gray100,
    paddingVertical: 8,
  },
  subTitle: {
    color: colors.gray50,
    paddingVertical: 8,
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 0.4,
    alignItems: 'flex-end',
  },
  rightSubContainer: {
    alignItems: 'flex-end',
  },
});
