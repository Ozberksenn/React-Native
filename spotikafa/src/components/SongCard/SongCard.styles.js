import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  info_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  artist: {
    color: 'black',
    fontWeight: 'bold',
  },
  year: {
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
  soldout_Container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  soldout_title: {
    color: 'black',
    fontSize: 12,
    color: 'red',
  },
  content_container: {
    flexDirection: 'row',
  },
});
