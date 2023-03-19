import {Image, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import {fontStyle} from '../style/fontStyle';

const Card = ({
  image,
  title,
  subTitle,
  onPressCard,
  index,
  containerStyle,
  imageStyle,
}) => {
  return (
    <Pressable
      onPress={onPressCard}
      style={[
        index % 2 === 0 && styles.cardMarginRight,
        styles.cardContainer,
        containerStyle,
      ]}>
      {image && (
        <Image
          style={[{height: 100, width: 100, marginBottom: 8}, imageStyle]}
          source={image}
        />
      )}
      {title && <Text style={[fontStyle.h3, styles.cardTitle]}>{title}</Text>}
      {subTitle && (
        <Text style={[fontStyle.body3, styles.cardSubTitle]}>{subTitle}</Text>
      )}
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: colors.gray1000,
    borderWidth: 1,
    borderColor: colors.gray1000,
    borderRadius: 32,
    padding: 16,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardMarginRight: {
    marginRight: 16,
  },
  cardTitle: {
    color: colors.gray50,
  },
  cardSubTitle: {
    color: colors.gray400,
  },
});
