import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
  },
  textBar_container: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  footer: {
    backgroundColor: '#345',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  title: {
    margin: 10,
    fontSize: 36,
    color: '#ffa500',
    textAlign: 'center',
  },
  button_container: {
    marginHorizontal: 10,
    padding: 5,
    backgroundColor: '#808080',
    borderRadius: 10,
  },
  button_text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  list_length: {
    fontSize: 20,
    marginLeft: 10,
  },
  list_container: {
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
    padding: 10,
  },
  list_text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  list_text_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  list_delete_container: {
    width: 25,
    height: 25,
    backgroundColor: 'red',
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list_delete_text: {
    color: 'white',
    fontSize: 20,
  },
  renderItem: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
