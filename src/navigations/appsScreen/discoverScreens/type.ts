import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type DiscoverParamsList = {
  DISCOVER_SCREEN: {};
};
export type DiscoverNavProps<T extends keyof DiscoverParamsList> = {
  navigation: NativeStackNavigationProp<DiscoverParamsList, T>;
  route: RouteProp<DiscoverParamsList, T>;
};
