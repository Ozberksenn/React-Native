import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
  },
  logo_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button_container: {
    flexDirection: 'row',
    marginLeft: 45,
  },
  button_main: {
    marginVertical: 50,
    marginHorizontal: 100,
  },
  input_container: {
    marginTop: 20,
  },
  forgetPassword: {
    marginHorizontal: 50,
    marginTop: 5,
  },
  forgetText: {
    color: '#98A5C9',
    fontSize: 16,
    fontStyle: 'italic',
  },
  buttonLogin: {
    borderRadius: 10,
    backgroundColor: '#FA4753',
    padding: 8,
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 5,
    fontStyle: 'italic',
  },
  buttonRegister: {
    borderRadius: 10,
    backgroundColor: '#98A5C9',
    padding: 8,
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 5,
    fontStyle: 'italic',
  },
});
