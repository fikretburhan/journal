import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/themes/colors';

const deviceHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  listContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    height: deviceHeight / 3.5,
  },
  listTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    padding: 8,
    color: colors.darkBlue,
  },
  singleItem: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 140,
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
  imageBox: {
    //height: deviceHeight / 10,
    padding: 5,
  },
  image: {height: 80, width: 100, borderRadius: 5},
  itemTitle: {
    color: colors.danger,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    paddingVertical: 3,
    //height: deviceHeight / 32,
  },
  shortDesc: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 10,
    paddingVertical: 5,
    //height: deviceHeight / 10,
  },
  dateBox: {
    //height: deviceHeight / 32,
    alignSelf: 'flex-end',
    marginBottom: 2,
  },
  date: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
  },
});
