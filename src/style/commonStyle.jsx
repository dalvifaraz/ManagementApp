import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

export const commonStyle = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: colors.gray100,
    marginHorizontal: 16,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 8,
  },
  defaultSubTitleStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 8,
  },
  defaultParaStyle: {
    textAlign: 'center',
    fontSize: 8,
    marginVertical: 8,
  },
});
