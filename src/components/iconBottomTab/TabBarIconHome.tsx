import React from 'react';
import { PropsTabBar } from 'navigations/appsScreen/type';
import { MyIcon } from 'components';
import { TabActions, useNavigation } from '@react-navigation/native';
import { HOME_SCREEN_TAB } from 'constants/screenKeys';

const TabBarIconHome = (props: PropsTabBar) => {
  const navigation = useNavigation();
  return (
    <MyIcon
      type="AntDesign"
      name="home"
      color={props.color}
      onPress={() => navigation.dispatch(TabActions.jumpTo(HOME_SCREEN_TAB, {}))}
    />
  );
};
export default TabBarIconHome;
