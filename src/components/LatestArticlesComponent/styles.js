import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/themes/colors';

const deviceHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  listContainer: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    height: deviceHeight / 3.5,
  },
  listTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    padding: 10,
    color: colors.darkBlue,
  },
  singleItem: {
    flexDirection: 'column',
    width: 120,
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  imageBox: {},
  image: {height: 80, width: 100},
  itemTitle: {
    color: colors.danger,
  },
  shortDesc: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
  },
  dateBox: {},
  date: {},
});
