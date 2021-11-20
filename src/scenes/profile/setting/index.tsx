import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Center, MyText } from 'components';
import { MainNavProps } from 'navigations/appsScreen/type';
import { Size } from 'styles/size';
import { checkPlatform, wait } from 'utils';

interface PropsScreen {
  //
}

type Props = MainNavProps<'SETTING_SCREEN'> & PropsScreen;

const SettingScreen = (props: Props) => {
  const { route, navigation } = props;

  return (
    <Center>
      <MyText content={`SettingScreen${route.params.fromProfile}`} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MyText content="back" />
      </TouchableOpacity>
    </Center>
  );
};
export default SettingScreen;

const styles = StyleSheet.create({
  //
});
