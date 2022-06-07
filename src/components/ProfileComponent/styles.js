import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';
export default StyleSheet.create({
  countryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 12,
    marginVertical: 5,
    borderWidth: 1,
    padding: 4,
    borderRadius: 3,
    borderColor: colors.lightBlue,
  },
  countryLabel: {
    marginHorizontal: 12,
    marginVertical: 6,
    color: colors.danger,
    fontFamily: 'Montserrat-SemiBold',
  },
  countryText: {
    marginLeft: 20,
    color: colors.black,
  },
  countryError: {
    color: colors.danger,
    marginLeft: 14,
  },
  icon: {
    marginHorizontal: 5,
  },
});
