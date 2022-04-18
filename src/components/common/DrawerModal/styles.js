import {StyleSheet} from 'react-native';

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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  line: {
    height: 0.75,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
});
