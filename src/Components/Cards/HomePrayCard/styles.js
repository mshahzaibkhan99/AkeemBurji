import {StyleSheet} from 'react-native';
import {lightTheme} from '../../../Utils/theme';
import commonStyles from '../../../Utils/commonStyles';
import {vh, vw} from '../../../Utils/units';

export default styles = StyleSheet.create({
  container: {
    height: vh * 27,
    width: vw * 35,
    marginHorizontal: vw * 2,
    borderRadius: vh * 2,
    ...commonStyles.cardShadow,
  },
  card: {
    height: vh * 27,
    width: vw * 35,
    resizeMode: 'cover',
    borderRadius: vh * 2,
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 6,
  },
  text: {
    fontSize: vh * 2.2,
    color: lightTheme.white,
  },
  btnForward: {
    marginTop: vh * 0.5,
    height: vh * 4,
    width: vh * 4,
    backgroundColor: lightTheme.red,
    padding: vh * 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 5,
  },
  forward: {
    height: vh * 2,
    width: vw * 4,
    resizeMode: 'contain',
  },
});
