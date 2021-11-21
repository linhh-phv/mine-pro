import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

interface Props {
  //
}

const Loading: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centerView}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  centerView: {
    width: 65,
    height: 65,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  }
});

export default Loading;
