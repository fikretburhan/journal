import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../assets/themes/colors';
const WIN_HEIGHT = Dimensions.get('window').height;
const WIN_WIDTH = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    width: WIN_WIDTH,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray,
    width: '100%',
    opacity: 0.3,
  },
  itemText: {
    height: 40,
    padding: 10,
    color: colors.black,
    marginLeft: 10,
    fontFamily: 'Montserrat',
    fontSize: 16,
  },
});
