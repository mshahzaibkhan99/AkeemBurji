import {StyleSheet} from 'react-native';
import {lightTheme} from '../../Utils/theme';
import {vh, vw} from '../../Utils/units';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.white,
    flex: 1,
  },
  loadMoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: vh * 1,
  },
  button: {
    width: vw * 34,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: vw * 86,
    marginBottom: vh * 1,
    alignSelf: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});
