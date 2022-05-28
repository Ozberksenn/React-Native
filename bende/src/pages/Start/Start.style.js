import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA4753',
  },
  image_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height,
    resizeMode: 'contain',
  },
});
