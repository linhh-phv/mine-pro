import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LOGIN_SCREEN, SIGNUP_SCREEN, SPLASH_SCREEN } from 'constants/screenKeys';
import LoginScreen from 'scenes/signin';
import SignUpScreen from 'scenes/singup';

const Stack = createNativeStackNavigator();

const authScreen = [
  {
    name: LOGIN_SCREEN,
    component: LoginScreen
  },
  {
    name: SIGNUP_SCREEN,
    component: SignUpScreen
  }
];

const AuthScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
      {authScreen.map((item, key) => (
        <Stack.Screen key={key} name={item.name} component={item.component} />
      ))}
    </Stack.Navigator>
  );
};

export default AuthScreens;
