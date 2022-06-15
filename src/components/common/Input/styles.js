import {StyleSheet} from 'react-native';
import colors from '../../../assets/themes/colors';
export default StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 12,
    marginVertical: 5,
    borderWidth: 1,
    padding: 4,
    borderRadius: 3,
  },
  input: {
    height: '98%',
    width: '85%',
  },
  label: {
    marginHorizontal: 12,
    marginVertical: 6,
    color: colors.danger,
    fontFamily: 'Montserrat-SemiBold',
  },
  personIcon: {
    color: colors.lightBlue,
  },
  personIconView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
  error: {
    color: colors.danger,
    marginLeft: 14,
  },
});
