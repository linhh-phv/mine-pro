import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

import {
  HOME_SCREEN_TAB,
  PROFILE_SCREEN_TAB,
  DISCOVER_SCREEN_TAB,
  SETTING_SCREEN,
  FEED_SCREEN
} from 'constants/screenKeys';

import HomeStackScreen from 'navigations/appsScreen/homeScreens';
import DiscoverStackScreen from 'navigations/appsScreen/discoverScreens';
import ProfileStackScreen from 'navigations/appsScreen/profileScreens';
import SettingScreen from 'scenes/profile/setting';

import { MainParamsList, TabParamsList } from './type';
import { selectState } from 'reduxApp/reducers';
import { TabBarIconHome, TabBarIconDiscover, TabBarIconProfile } from 'components/iconBottomTab';
import { getBagdeAction } from 'reduxApp/app/actions';
import { checkPlatform } from 'utils';
import { Colors } from 'styles';
import { Size } from 'styles/size';

const Stack = createNativeStackNavigator<MainParamsList>();
const Tab = createBottomTabNavigator<TabParamsList>();

const HomeTabs = () => {
  const { badge } = selectState((state) => state.app);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: checkPlatform<number>(0, Size.size10),
          height: checkPlatform<number>(Size.size56, Size.size80)
        },
        tabBarBadgeStyle: {
          marginTop: checkPlatform<number>(0, -Size.size5),
          backgroundColor: Colors.PRIMARY
        },
        tabBarHideOnKeyboard: true,
        title: '',
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.TEXT_NORMAL
      }}>
      <Tab.Screen
        name={HOME_SCREEN_TAB}
        component={HomeStackScreen}
        options={{
          tabBarIcon: (props) => <TabBarIconHome {...props} />
        }}
      />
      <Tab.Screen
        name={DISCOVER_SCREEN_TAB}
        component={DiscoverStackScreen}
        options={{
          tabBarIcon: (props) => <TabBarIconDiscover {...props} />
        }}
      />
      <Tab.Screen
        name={PROFILE_SCREEN_TAB}
        component={ProfileStackScreen}
        options={{
          tabBarIcon: (props) => <TabBarIconProfile />,
          tabBarBadge: badge > 0 ? badge : undefined
        }}
      />
    </Tab.Navigator>
  );
};

const AppsScreens = () => {
  const dispatch = useDispatch();

  const getBadgeFail = (error: any) => {
    console.log('get badge failed: ', error);
  };
  const getBadgeSucess = (result: any) => {
    console.log('get badge sucess: ', result);
  };

  useEffect(() => {
    let badge = 0;
    const interval = setInterval(() => {
      badge += 1;
      dispatch(
        getBagdeAction({
          badge: badge,
          onFail: (error) => getBadgeFail(error),
          onSuccess: (result) => getBadgeSucess(result)
        })
      );
    }, 50000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        animation: 'none',
        headerShown: false
      }}>
      <Stack.Screen name={FEED_SCREEN} component={HomeTabs} />
      <Stack.Screen name={SETTING_SCREEN} component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default AppsScreens;
