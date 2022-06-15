import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.white,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Roboto-Black',
    color: colors.darkBlue,
  },
  createAccountButtonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: colors.darkBlue,
  },
  secureTextButton: {
    padding: 5,
  },
});
