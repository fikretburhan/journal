import {StyleSheet, Dimensions} from 'react-native';

const WIN_WIDTH = Dimensions.get('window').width;
const WIN_HEIGHT = Dimensions.get('window').height;
export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: WIN_WIDTH * 0.8,
    height: WIN_HEIGHT * 0.5,
  },
});
