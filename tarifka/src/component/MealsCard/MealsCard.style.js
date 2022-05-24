import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {},
  image: {
    margin: 5,
    height: deviceSize.height / 3,
    borderRadius: 15,
  },
  text_container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.7,
    height: 60,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 5,
  },
  text: {
    fontSize: 26,
    color: 'white',
  },
});
