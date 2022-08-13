import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/themes/colors';
const device_height = Dimensions.get('screen').height;
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
    fontFamily: 'Roboto-Bold',
    color: colors.darkBlue,
  },
  alreadyHaveAccountButtonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alreadyHaveAccountButtonText: {
    color: colors.darkBlue,
  },
  secureTextButton: {
    padding: 5,
  },
  topWrapper: {
    height: '50%',
    width: '100%',
    backgroundColor: colors.blue,
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  middleWrapper: {
    position: 'absolute',
    top: device_height / 4,
    marginHorizontal: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,
    paddingVertical: 20,
  },
});
