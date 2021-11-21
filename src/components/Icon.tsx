import React from 'react';
import {ViewStyle} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import {Colors} from 'styles';
import {scaleSize} from 'styles/common';
import {Size} from 'styles/size';

export type typeIcon =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

interface Props {
  style?: ViewStyle[];
  type: typeIcon;
  name: string;
  size?: number;
  color?: string;
  onPress?: () => void;
}

const MyIcon: React.FC<Props> = (props: Props) => {
  const {style, type, name, size, color, onPress} = props;
  switch (type) {
    case 'AntDesign':
      return (
        <AntDesign
          name={name}
          onPress={() => onPress && onPress()}
          size={size ? scaleSize(size) : Size.sizeIcon}
          style={style}
          color={color ?? Colors.BLACK}
        />
      );
    case 'Entypo':
      return (
        <Entypo
          name={name}
          onPress={() => onPress && onPress()}
          size={size ? scaleSize(size) : Size.sizeIcon}
          style={style}
          color={color ?? Colors.BLACK}
        />
      );
    case 'EvilIcons':
      return (
        <EvilIcons
          name={name}
          onPress={() => onPress && onPress()}
          size={size ? scaleSize(size) : Size.sizeIcon}
          style={style}
          color={color ?? Colors.BLACK}
        />
      );
    case 'Feather':
      return (
        <Feather
          name={name}
          onPress={() => onPress && onPress()}
          size={size ? scaleSize(size) : Size.sizeIcon}
          style={style}
          color={color ?? Colors.BLACK}
        />
      );
    case 'FontAwesome':
      return (
        <FontAwesome
          name={name}
          onPress={() => onPress && onPress()}
          size={size ? scaleSize(size) : Size.sizeIcon}
          style={style}
          color={color ?? Colors.BLACK}
        />
      );
    case 'FontAwesome5':
      return (
        <FontAwesome5
          name={name}
          onPress={() => onPress && onPress()}
          size={size ? scaleSize(size) : Size.sizeIcon}
          style={style}
          color={color ?? Colors.BLACK}
        />
      );
    case 'Fontisto':
      return (
        <Fontisto
          name={name}
          onPress={() => onPress && onPress()}
          size={size ? scaleSize(size) : Size.sizeIcon}
          style={style}
          color={color ?? Colors.BLACK}
        />
      );
    case 'Foundation':
      return (
        <Foundation
          name={name}
          onPress={() => onPress && onPress()}
          size={size ? scaleSize(size) : Size.sizeIcon}
          style={style}
          color={color ?? Colors.BLACK}
        />
      );
    case 'Ionicons':
      return (
        <Ionicons
          name={name}
          onPress={() => onPress && onPress()}
          size={size ? scaleSize(size) : Size.sizeIcon}
          style={style}
          color={color ?? Colors.BLACK}
        />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={name}
          onPress={() => onPress && onPress()}
          size={size ? scaleSize(size) : Size.sizeIcon}
          style={style}
          color={color ?? Colors.BLACK}
        />
      );
    case 'MaterialIcons':
      return (
        <MaterialIcons
          name={name}
          onPress={() => onPress && onPress()}
          size={size ? scaleSize(size) : Size.sizeIcon}
          style={style}
          color={color ?? Colors.BLACK}
        />
      );
    case 'Octicons':
      return (
        <Octicons
          name={name}
          onPress={() => onPress && onPress()}
          size={size ? scaleSize(size) : Size.sizeIcon}
          style={style}
          color={color ?? Colors.BLACK}
        />
      );
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons
          name={name}
          onPress={() => onPress && onPress()}
          size={size ? scaleSize(size) : Size.sizeIcon}
          style={style}
          color={color ?? Colors.BLACK}
        />
      );
    case 'Zocial':
      return (
        <Zocial
          name={name}
          onPress={() => onPress && onPress()}
          size={size ? scaleSize(size) : Size.sizeIcon}
          style={style}
          color={color ?? Colors.BLACK}
        />
      );
    default:
      return null;
  }
};
export default MyIcon;
