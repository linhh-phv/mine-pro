import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type MainParamsList = {
  FEED_SCREEN: {};
  SETTING_SCREEN: {
    fromProfile?: boolean;
  };
};

export type TabParamsList = {
  HOME_SCREEN_TAB: {};
  PROFILE_SCREEN_TAB: {};
  DISCOVER_SCREEN_TAB: {};
};

export type MainNavProps<T extends keyof MainParamsList> = {
  navigation: NativeStackNavigationProp<MainParamsList, T>;
  route: RouteProp<MainParamsList, T>;
};

export type MainTabProps<T extends keyof TabParamsList> = {
  navigation: BottomTabNavigationProp<TabParamsList, T>;
  route: RouteProp<TabParamsList, T>;
};

export interface PropsTabBar {
  focused: boolean;
  color: string;
  size: number;
}
