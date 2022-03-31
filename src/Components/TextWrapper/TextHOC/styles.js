import {lightTheme} from '../../../Utils/theme';
import {vh} from '../../../Utils/units';

const {StyleSheet} = require('react-native');
const styles = StyleSheet.create({
  font: {
    fontSize: 2 * vh,
    color: lightTheme.black,
    includeFontPadding: false,
  },
});
export default styles;
