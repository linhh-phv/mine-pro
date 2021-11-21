import React, { ReactNode } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { StyleSheet, View } from 'react-native';
import { Colors } from 'styles';
import { SeparatorView } from 'components';
import { Size } from 'styles/size';

interface Props {
  height: number;
  color?: string;
  children: ReactNode;
}

const ContainerContentModal: React.FC<Props> = (props: Props) => {
  const { children, height, color } = props;

  const ItemSeparatorView = () => {
    return (
      <View style={styles.divideTop}>
        <SeparatorView width={48} height={4} color={Colors.SECONDARY} />
      </View>
    );
  };

  return (
    <View
      style={{
        ...styles.modalContainer,
        height: height,
        backgroundColor: color ?? Colors.WHITE
      }}>
      <ItemSeparatorView />
      <KeyboardAwareScrollView scrollEnabled={false} scrollEventThrottle={16}>
        <View style={styles.borderContainer}>{children}</View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ContainerContentModal;

const styles = StyleSheet.create({
  modalContainer: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  divideTop: {
    marginTop: 8,
    alignSelf: 'center',
    borderRadius: 8
  },
  modalStyle: {
    margin: 0,
    justifyContent: 'flex-end'
  },
  borderContainer: {
    padding: Size.size16,
    paddingTop: Size.size24
  }
});
