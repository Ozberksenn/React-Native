import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#8CC0DE',
    borderRadius: 5,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
  },
  body_container: {
    padding: 2,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    textAlign: 'right',
    fontSize: 16,
    fontStyle: 'italic',
    color: '#393E46',
  },
});
