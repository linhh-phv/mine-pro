import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeParamsList = {
  HOME_SCREEN: {};
};

export type HomeNavProps<T extends keyof HomeParamsList> = {
  navigation: NativeStackNavigationProp<HomeParamsList, T>;
  route: RouteProp<HomeParamsList, T>;
};
