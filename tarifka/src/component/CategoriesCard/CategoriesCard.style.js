import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  body_container: {
    marginLeft: 5,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: 'gray',
  },
  image: {
    marginLeft: 20,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title_container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: 'gray',
  },
  title: {
    marginLeft: 10,
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
  },
});
