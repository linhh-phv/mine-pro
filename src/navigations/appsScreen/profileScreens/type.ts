import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ProfileParamsList = {
  PROFILE_SCREEN: {};
  SETTING_SCREEN: {};
};

export type ProfileNavProps<T extends keyof ProfileParamsList> = {
  navigation: NativeStackNavigationProp<ProfileParamsList, T>;
  route: RouteProp<ProfileParamsList, T>;
};
