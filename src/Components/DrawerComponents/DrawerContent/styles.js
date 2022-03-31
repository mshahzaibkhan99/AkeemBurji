import {StyleSheet} from 'react-native';
import {lightTheme} from '../../../Utils/theme';
import {vh, vw} from '../../../Utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.accent1,
  },
  routeContainer: {
    marginTop: 3 * vh,
    marginLeft: vw * 4,
  },
  profileImage: {
    height: vh * 8,
    width: vh * 8,
    borderRadius: (vh * 8) / 2,
    backgroundColor: lightTheme.white,
  },
  profileImageContainer: {
    height: vh * 9,
    width: vh * 9,
    borderRadius: (vh * 9) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lightTheme.accent1,
    borderWidth: 2,
    borderColor: lightTheme.white,
  },
  profileTextContainer: {
    backgroundColor: lightTheme.ligtGrey,
  },
  profileText: {
    color: lightTheme.white,
    fontSize: vh * 5,
  },
  header: {
    marginTop: vh * 14,
    marginBottom: vh * 5,
    paddingLeft: vw * 8,
  },
  footer: {
    // marginTop: vh * 10,
    position: 'absolute',
    bottom: vh * -15,
    paddingLeft: vw * 8,
  },
  userName: {
    color: lightTheme.white,
    fontSize: vh * 3,
    marginTop: vh * 1,
  },
  button: {
    backgroundColor: lightTheme.black,
    borderRadius: vh * 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: vh * 1.5,
    width: vw * 45,
  },
  buttonText: {
    fontSize: vh * 2,
    color: lightTheme.white,
  },
});
export default styles;
