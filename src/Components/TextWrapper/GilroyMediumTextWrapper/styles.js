const {StyleSheet} = require('react-native');
import fonts from '../../../Assets/Fonts';
import {lightTheme, textLightColor} from '../../../Utils/theme';
const styles = StyleSheet.create({
  font: {
    fontFamily: fonts.Gilroy.Medium,
    color: lightTheme.darkGrey,
  },
});

export default styles;
