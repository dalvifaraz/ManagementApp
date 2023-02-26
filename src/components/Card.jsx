import {Image, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const Card = ({image, title, subTitle, onPressCard}) => {
  return (
    <Pressable onPress={onPressCard} style={styles.cardContainer}>
      {image && (
        <Image
          style={{height: 100, width: 100, marginBottom: 8}}
          source={image}
        />
      )}
      {title && <Text style={styles.cardTitle}>{title}</Text>}
      {subTitle && <Text style={styles.cardSubTitle}>{subTitle}</Text>}
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    // width: '45%',
    flex: 1,
    backgroundColor: colors.gray800,
    borderWidth: 1,
    borderColor: colors.gray500,
    borderRadius: 32,
    padding: 16,
    marginHorizontal: 8,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    color: colors.gray50,
  },
  cardSubTitle: {
    color: colors.gray400,
  },
});
