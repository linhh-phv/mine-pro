import React, { useEffect, useState, useRef, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { PROFILE_SCREEN, SETTING_SCREEN } from 'constants/screenKeys';
import { HomeNavProps } from 'navigations/appsScreen/homeScreens/type';
import { Center, Row, MyText, MyIcon, SeparatorView } from 'components';
import { MainNavProps } from 'navigations/appsScreen/type';
import { HeaderLeft, HeaderRight } from 'components/header';
import { Size } from 'styles/size';
import { Colors } from 'styles';
import CommonStyles from 'styles/common';
import { checkPlatform, wait } from 'utils';

const HomeScreen = (props: MainNavProps<'FEED_SCREEN'>) => {
  const { navigation, route } = props;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      header: () => (
        <SafeAreaView style={{ backgroundColor: Colors.WHITE }}>
          <Row style={CommonStyles.headerStyle}>
            <HeaderLeft home {...props} />
            <HeaderRight home />
          </Row>
          <SeparatorView height={1.2} />
        </SafeAreaView>
      )
    });
  }, []);

  const pressSetting = () => {
    //
  };

  return (
    <Center style={styles.container}>
      <MyText content="Home" />
      {/* <MyIcon type="FontAwesome" name="rocket" color="red" /> */}

      <TouchableOpacity onPress={pressSetting}>
        <MyText content="setting" />
      </TouchableOpacity>
    </Center>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  }
});
