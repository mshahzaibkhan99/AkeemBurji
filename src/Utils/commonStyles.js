import {StyleSheet} from 'react-native';
import {lightTheme} from './theme';

export default styles = StyleSheet.create({
  mainContainer: {},
  cardShadow: {
    elevation: 5,
    shadowColor: lightTheme.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  lightShadow: {
    elevation: 7,
    shadowColor: lightTheme.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
});
