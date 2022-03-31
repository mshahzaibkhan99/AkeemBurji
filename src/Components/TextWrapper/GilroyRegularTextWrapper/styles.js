const {StyleSheet} = require('react-native');
import fonts from '../../../Assets/Fronts';
import {lightTheme, textLightColor} from '../../../Utils/theme';
const styles = StyleSheet.create({
  font: {
    fontFamily: fonts.Gilroy.Regular,
    color: lightTheme.darkGrey,
  },
});

export default styles;
