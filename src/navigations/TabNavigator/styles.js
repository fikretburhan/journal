import {StyleSheet, Dimensions} from 'react-native';
const window = Dimensions.get('window');
import colors from '../../assets/themes/colors';
export default StyleSheet.create({
  tabWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: window.height / 15,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 6,
  },
  tabItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItemText: {
    color: colors.darkBlue,
  },
});
