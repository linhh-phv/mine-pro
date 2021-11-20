import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const pressLogin = () => {};
  const pressSignUp = () => {};

  return (
    <View style={styles.body}>
      <Text>sigup </Text>
      <TouchableOpacity onPress={() => pressLogin()}>
        <Text>Login </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pressSignUp()}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center'
    // justifyContent: 'center',
    // alignContent: 'center',
  }
});
