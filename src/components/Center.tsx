import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface CenterProps {
  style?: ViewStyle;
  nor?: boolean;
  children: ReactNode;
}

const Center: React.FC<CenterProps> = (props: CenterProps) => {
  const { children, style, nor } = props;
  return <View style={[styles.container, style, !nor && { flex: 1 }]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Center;
