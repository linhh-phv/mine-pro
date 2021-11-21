import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DISCOVER_SCREEN } from 'constants/screenKeys';

import DiscoverScreen from 'scenes/discover';
import { DiscoverParamsList } from 'navigations/appsScreen/discoverScreens/type';

const DiscoverStack = createNativeStackNavigator<DiscoverParamsList>();

const DiscoverStackScreen = () => {
  return (
    <DiscoverStack.Navigator screenOptions={{ gestureEnabled: false, headerShown: false }}>
      <DiscoverStack.Screen name={DISCOVER_SCREEN} component={DiscoverScreen} />
    </DiscoverStack.Navigator>
  );
};
export default DiscoverStackScreen;
