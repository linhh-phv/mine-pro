import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PROFILE_SCREEN } from 'constants/screenKeys';

import ProfileScreen from 'scenes/profile';
import { ProfileParamsList } from 'navigations/appsScreen/profileScreens/type';

const ProfileStack = createNativeStackNavigator<ProfileParamsList>();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ gestureEnabled: false, headerShown: false, title: '' }}>
      <ProfileStack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};
export default ProfileStackScreen;
