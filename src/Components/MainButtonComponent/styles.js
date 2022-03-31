import {StyleSheet} from 'react-native';
import {lightTheme} from '../../Utils/theme';
import {vh, vw} from '../../Utils/units';

export default styles = StyleSheet.create({
  mainContiner: {
    flexDirection: 'row',
  },
  container: {
    backgroundColor: lightTheme.red,
    paddingVertical: vh * 1.4,
    paddingHorizontal: vh * 2.2,
    // width: vh * 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 1,
    // width: vw * 20,
  },
  title: {
    color: lightTheme.white,
    fontSize: vh * 1.8,
  },
});
