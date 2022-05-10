import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  inner_container: {
    padding: 5,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
  description: {
    marginTop: 3,
  },
});
