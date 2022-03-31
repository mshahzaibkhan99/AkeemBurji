import {StyleSheet} from 'react-native';
import {lightTheme} from '../../Utils/theme';
import {vh, vw} from '../../Utils/units';

export default styles = StyleSheet.create({
  carouselContainer: {
    marginTop: vh * 2,
    alignItems: 'flex-start',
    // justifyContent: 'center',
  },
  slide: {
    height: vh * 27,
    backgroundColor: lightTheme.white,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: vh * 2,
    // marginHorizontal: vw * 15,
  },

  image: {
    resizeMode: 'cover',
    width: vw * 90,
    height: vh * 27,
    backgroundColor: lightTheme.white,
    borderRadius: vh * 2,
  },
  paginationContainer: {
    marginTop: vh * -3,
    paddingVertical: vh * 1,
  },
  paginationDot: {
    width: vh * 5,
    height: vh * 1,
    borderRadius: vh * 1,
    backgroundColor: 'red',
    marginHorizontal: vw * -2,
  },
  title: {
    position: 'absolute',
    bottom: vh * 3,
    left: vw * 6.5,
  },
  text: {
    fontSize: vh * 2.6,
    color: lightTheme.white,
  },
});
