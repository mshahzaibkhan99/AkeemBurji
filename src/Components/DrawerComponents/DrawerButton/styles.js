import {StyleSheet} from 'react-native';
import {lightTheme} from '../../../Utils/theme';
import {vh, vw} from '../../../Utils/units';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3 * vh,
  },
  icon: {
    // tintColor: lightTheme.white,
    height: 2.5 * vh,
    width: 2.5 * vh,
    resizeMode: 'contain',
    marginHorizontal: 5 * vw,
  },
  label: {
    fontSize: 2 * vh,
    color: lightTheme.white,
  },
});

export default styles;
