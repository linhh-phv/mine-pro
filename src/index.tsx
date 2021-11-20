import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
// import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MainNavigation from 'navigations';
import store from './reduxApp/store';
import { Container } from 'components';

const Stack = createNativeStackNavigator();
function AppContainer() {
  return (
    <Provider store={store}>
      {/* <PaperProvider> */}
      <Container>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MainNavigation} />
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
      {/* </PaperProvider> */}
    </Provider>
  );
}

export default AppContainer;
