import {StyleSheet} from 'react-native';
import {lightTheme} from '../../Utils/theme';
import {vh, vw} from '../../Utils/units';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.white,
    paddingTop: vh * 5,
    paddingHorizontal: vw * 5,
    flex: 1,
  },
  menu: {
    height: vh * 3,
    width: vh * 3,
    resizeMode: 'contain',
  },
  secondHeading: {
    flexDirection: 'row',
  },
  boldHeading: {
    fontWeight: '700',
    fontSize: vh * 3,
  },
  secondText: {
    fontSize: vh * 3,
  },
  buttonHeadingContainer: {
    marginVertical: vh * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    fontSize: vh * 3,
  },
  redLine: {
    marginTop: vh * -1.5,
    height: vh * 0.3,
    width: vw * 10,
    backgroundColor: lightTheme.red,
    marginBottom: vh * 2,
  },
});
