import {StyleSheet} from 'react-native';
import {lightTheme} from '../Utils/theme';
import {vh, vw} from '../Utils/units';
import commonStyles from '../Utils/commonStyles';

const styles = StyleSheet.create({
  image: {
    height: vh * 3,
    width: vh * 3,
    resizeMode: 'contain',
    tintColor: lightTheme.white,
  },
  headerTitleStyle: {
    fontSize: vh * 2.5,
    color: lightTheme.white,
  },
  headerBackground: {
    height: vh * 14,
    width: '100%',
    backgroundColor: lightTheme.primaryColor,
    borderBottomLeftRadius: vh * 3,
    borderBottomRightRadius: vh * 3,
  },
  headerBackgroundImage: {
    borderBottomRightRadius: vh * 4,
    borderBottomLeftRadius: vh * 4,
  },
  profileImage: {
    height: vh * 10,
    width: vh * 10,
  },
  profileImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    elevation: 10,
    marginTop: -vh * 4,
  },
  name: {
    fontSize: vh * 3,
  },
  location: {
    fontSize: vh * 1.4,
  },
  searchBar: {
    width: vw * 80,
    height: vh * 5,
    alignSelf: 'center',
    marginTop: -vh * 3,
  },
  logo: {
    height: vh * 7,
    width: vh * 7,
    resizeMode: 'contain',
  },
  btnBG: {
    padding: vh * 1,
    backgroundColor: lightTheme.accent2,
    borderRadius: vh * 5,
    ...commonStyles.cardShadow,
  },
});

export default styles;
