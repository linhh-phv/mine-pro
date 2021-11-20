import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { selectState } from 'reduxApp/reducers';
import { Size } from 'styles/size';
import { MyText } from 'components';

interface Props {
  home?: boolean;
  profile?: boolean;
  navigation: any;
  pressLeft?: () => void;
}
const HeaderLeft = (props: Props) => {
  const { name } = selectState((state) => state.signin);
  const { home, profile, navigation, pressLeft } = props;

  if (home) {
    return (
      <View>
        <MyText content="Mine" bold large />
      </View>
    );
  } else if (profile) {
    return (
      <View>
        <MyText content={name ? name : '_linhph'} bold large />
      </View>
    );
  } else
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios" size={Size.sizeIcon} />
      </TouchableOpacity>
    );
};
export default HeaderLeft;
