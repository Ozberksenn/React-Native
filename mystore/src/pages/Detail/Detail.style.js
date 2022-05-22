import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {flex: 1},
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    backgroundColor: 'white',
    resizeMode: 'contain',
  },
  body_container: {},
  title: {fontSize: 24, fontWeight: 'bold', color: 'black'},
  description: {
    fontStyle: 'italic',
    fontSize: 18,
    color: 'black,',
  },
  price: {
    marginVertical: 5,
    fontSize: 22,
    textAlign: 'right',
    color: 'green',
  },
});
