import {StyleSheet} from 'react-native';
import colors from '../../../assets/themes/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 4,
    height: 300,
    width: 175,
    marginHorizontal: 20,
    marginTop: 50,
  },
  modalItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 15,
  },
  line: {
    height: 0.75,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  divider: {
    marginHorizontal: 10,
    backgroundColor: colors.darkBlue,
    height: 1.2,
  },
});
