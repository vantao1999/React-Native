import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require('../images/quehuong.jpg')}
        resizeMode={'stretch'}
      />
      <Image style={styles.logo} source={require('../images/man.png')} />
      <View>
        <Text style={styles.text}>Phone Number :</Text>
        <TextInput style={styles.input} />
        <Text style={styles.text}>Your Password :</Text>
        <TextInput style={styles.pass} />
        <View style={styles.button}>
          <Button
            style={styles.loginButton}
            title="Log in"
            color="#64ea64"
            onPress={() => Alert.alert('Log in successful')}
          />
        </View>
      </View>
    </View>
  );
};

export default DisplayAnImage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  logo: {
    width: 300,
    height: 92,
    opacity: 0.7,
    marginHorizontal: 30,
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pass: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    maxWidth: 100,
  },
});
