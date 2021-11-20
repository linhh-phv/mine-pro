import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface RowProps {
  style?: ViewStyle;
  children: ReactNode;
}

const Row: React.FC<RowProps> = (props: RowProps) => {
  const { children, style } = props;
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default Row;
