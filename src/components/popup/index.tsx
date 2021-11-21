import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';
import BottomSheet from 'reanimated-bottom-sheet';
import { scaleSize } from 'styles/common';

interface Props {
  style?: ViewStyle;
  visiblePopUpMenu: boolean;
  sheetRef: any;
  renderContent: () => React.ReactNode;
  onClose: () => void;
  onOpen: () => void;
  heightSnap0: number;
  heightSnap1?: number;
  heightSnap2?: number;
}

const PopupBottomSheet = (props: Props) => {
  const { sheetRef, visiblePopUpMenu, heightSnap0, heightSnap1, heightSnap2, onOpen, onClose, renderContent } = props;
  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      isVisible={visiblePopUpMenu}
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      style={styles.modalStyle}>
      <View style={{ height: scaleSize(heightSnap0) }}>
        <BottomSheet
          ref={sheetRef}
          onOpenEnd={onOpen}
          onCloseEnd={onClose}
          snapPoints={[scaleSize(heightSnap0), heightSnap1 ?? 0, heightSnap2 ?? 0]}
          borderRadius={24}
          renderContent={renderContent}
          enabledInnerScrolling={false}
          enabledBottomInitialAnimation={false}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalStyle: {
    margin: 0,
    justifyContent: 'flex-end'
  }
});
export default PopupBottomSheet;
