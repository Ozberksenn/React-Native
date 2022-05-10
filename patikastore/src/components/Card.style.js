import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 15,
    borderWidth: 5,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  card_title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  card_image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 5,
    width: '100%',
    resizeMode: 'contain',
  },
  card_price: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
  card_stock: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
