import React from 'react';
import { TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Size } from 'styles/size';
import { MyIcon, Row } from 'components';

interface Props {
  home?: boolean;
  profile?: boolean;
  pressRight1?: () => void;
  pressRight?: () => void;
}

const HeaderRight = (props: Props) => {
  const { home, profile, pressRight, pressRight1 } = props;
  if (home) {
    return (
      <Row>
        <>
          <TouchableOpacity onPress={() => pressRight1 && pressRight1()}>
            <MyIcon type="FontAwesome" name="plus-square-o" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: Size.size16 }} onPress={() => pressRight && pressRight()}>
            <MyIcon type="Entypo" name="direction" />
          </TouchableOpacity>
        </>
      </Row>
    );
  } else if (profile) {
    return (
      <Row>
        <>
          <TouchableOpacity onPress={() => pressRight1 && pressRight1()}>
            <FontAwesome name="plus-square-o" size={Size.sizeIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: Size.size16 }} onPress={() => pressRight && pressRight()}>
            <Feather name="menu" size={Size.sizeIcon} />
          </TouchableOpacity>
        </>
      </Row>
    );
  } else return null;
};
export default HeaderRight;
