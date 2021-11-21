import React, { ReactNode } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { selectState } from 'reduxApp/reducers';
import { Colors } from 'styles';
import { checkPlatform } from 'utils';
import { MyText } from 'components';

interface Props {
  children: ReactNode;
}

const Container: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const isConnected = selectState((state) => state.app.isConnect);
  const renderLostConnecttion = () => {
    return (
      <>
        <SafeAreaView style={[styles.backgroundColorRed, styles.heightSafeAreaView]} />
        <View style={[styles.heightStatusBarAndroid, styles.backgroundColorRed]} />
        <View style={[styles.containerAlert, styles.backgroundColorRed]}>
          <MyText content="Network unavailable" color={Colors.WHITE} medium />
        </View>
      </>
    );
  };

  return (
    <View style={[styles.container]}>
      <StatusBar barStyle="default" />

      {!isConnected && renderLostConnecttion()}

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerAlert: {
    height: checkPlatform<number>(20, 30),
    justifyContent: 'center',
    alignItems: 'center'
  },
  heightStatusBarAndroid: {
    height: checkPlatform(StatusBar.currentHeight, 0)
  },
  heightSafeAreaView: {
    marginTop: checkPlatform(0, -8)
  },
  backgroundColorRed: {
    backgroundColor: Colors.RED
  }
});

export default Container;
