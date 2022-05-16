import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';
import {Dimensions} from 'react-native';

const WIN_WIDTH = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {backgroundColor: colors.white},
  header: {},
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  titleView: {
    justifyContent: 'center',
    //width: WIN_WIDTH / 2,
    flex: 2,
  },
  titleText: {
    color: colors.darkBlue,
    fontSize: 18,
    fontFamily: 'Roboto-BoldItalic',
    alignSelf: 'center',
  },
  articleView: {},
  articleText: {
    textAlign: 'justify',
    padding: 10,
    color: colors.black,
  },
  image: {height: 120, flex: 1, margin: 10},
});
