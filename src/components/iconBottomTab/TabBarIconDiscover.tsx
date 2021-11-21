import React from 'react';
import { PropsTabBar } from 'navigations/appsScreen/type';
import { MyIcon } from 'components';
import { TabActions, useNavigation } from '@react-navigation/native';
import { DISCOVER_SCREEN_TAB } from 'constants/screenKeys';

const TabBarIconDiscover = (props: PropsTabBar) => {
  const navigation = useNavigation();
  return (
    <MyIcon
      type="AntDesign"
      name="search1"
      color={props.color}
      onPress={() => navigation.dispatch(TabActions.jumpTo(DISCOVER_SCREEN_TAB, {}))}
    />
  );
};
export default TabBarIconDiscover;
