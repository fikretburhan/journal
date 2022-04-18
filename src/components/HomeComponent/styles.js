import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/themes/colors';

const window = Dimensions.get('window');
export default StyleSheet.create({
  navBar: {
    height: window.height / 15,
    backgroundColor: colors.danger,
  },
});
