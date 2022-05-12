import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/themes/colors';

const window = Dimensions.get('window');
export default StyleSheet.create({
  navBar: {
    height: window.height / 15,
    backgroundColor: colors.danger,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  listContainer: {
    paddingVertical: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  container: {
    backgroundColor: colors.white,
  },
});
