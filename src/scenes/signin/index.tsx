import React, { useState, createRef } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginAction } from 'reduxApp/signin/actions';
import { selectState } from 'reduxApp/reducers';
import { Loading } from 'components';

const LoginScreen = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { loading } = selectState((state) => state.signin);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const loginSuccess = (result: any) => {
    console.log('loged in', result);
  };

  const loginFail = (error: any) => {
    Alert.alert(`${error?.message}`);
  };

  const pressLogin = async () => {
    dispatch(
      loginAction({
        username: username,
        password: password,
        onFail: (error) => loginFail(error),
        onSuccess: (result) => loginSuccess(result)
      })
    );
  };
  const pressSignUp = () => {
    // navigation.navigate(SIGNUP_SCREEN);
  };

  return (
    <View style={styles.body}>
      <Text>signin </Text>
      <TouchableOpacity onPress={() => pressLogin()}>
        <Text>Login </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pressSignUp()}>
        <Text>Sign up</Text>
      </TouchableOpacity>
      {loading && <Loading />}
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center'
    // justifyContent: 'center',
    // alignContent: 'center',
  }
});
