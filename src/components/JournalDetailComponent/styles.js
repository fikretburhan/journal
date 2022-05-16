import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
  },
  pageInputContainer: {
    marginHorizontal: 5,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageInput: {
    borderColor: colors.pageInputColor,
    borderWidth: 1,
    height: 30,
    borderRadius: 5,
    marginVertical: 2,
    marginHorizontal: 5,
    fontSize: 12,
    padding: 2,
    textAlign: 'center',
  },
});
