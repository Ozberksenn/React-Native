import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {},
  image: {
    height: deviceSize.height / 3,
  },
  title: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#a52a2a',
  },
  line: {
    marginVertical: 10,
    height: 1,
    backgroundColor: 'gray',
  },
  description: {
    margin: 10,
    fontSize: 16,
    fontStyle: 'italic',
  },
  space: {
    marginTop: 20,
  },
});
