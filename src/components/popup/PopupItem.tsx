import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Size } from 'styles';
import { Row, Center, MyIcon, MyText } from 'components';
import { typeIcon } from 'components/Icon';

type textContent = 'Cài đặt' | 'Kho lưu trữ' | 'Hoạt động của bạn' | 'Mã QR' | 'Đã lưu' | 'Bạn thân';

interface Props {
  text: textContent;
  onPress: () => void;
  icon: string;
  typeIcon: typeIcon;
}

const PopupItem: React.FC<Props> = (props: Props) => {
  const { text, icon, typeIcon, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Row style={styles.container}>
        <Center nor style={styles.containerIcon}>
          <MyIcon type={typeIcon} name={icon} size={Size.Size.sizeIcon} />
        </Center>
        <Center style={styles.containerText}>
          <MyText content={text} medium />
        </Center>
      </Row>
    </TouchableOpacity>
  );
};

export default PopupItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    height: Size.Size.size60
  },
  containerIcon: {
    marginRight: Size.Size.size16
  },
  containerText: {
    alignItems: 'flex-start',
    borderBottomColor: Colors.GRAY_LIGHT,
    borderBottomWidth: 0.5,
    height: '100%'
  }
});
