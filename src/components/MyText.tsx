import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { Colors } from 'styles';
import CommonStyles from 'styles/common';

interface Props {
  style?: TextStyle[];
  content: string;
  color?: string;
  numberOfLines?: number;
  medium?: boolean;
  regular?: boolean;
  large?: boolean;
  small?: boolean;
  bold?: boolean;
  italic?: boolean;
  center?: boolean;
}

const MyText: React.FC<Props> = (props: Props) => {
  const { content, style, numberOfLines, medium, regular, large, small, bold, italic, color, center } = props;

  const fontSize = (): TextStyle => {
    let textStyle: TextStyle = CommonStyles.textRegular;

    if (small) {
      textStyle = CommonStyles.textSmall;
    } else if (regular) {
      textStyle = CommonStyles.textRegular;
    } else if (medium) {
      textStyle = CommonStyles.textMedium;
    } else if (large) {
      textStyle = CommonStyles.textLarge;
    }
    return textStyle;
  };

  const fontStyle = (): TextStyle => {
    let textStyle: TextStyle = styles.normal;

    if (bold) {
      textStyle = styles.bold;
    } else if (italic) {
      textStyle = styles.italic;
    }
    return textStyle;
  };

  const colorStyle = (): TextStyle => {
    return { color: color ?? Colors.TEXT_NORMAL };
  };

  const alignStyle = (): TextStyle => {
    return { textAlign: center ? 'center' : 'left' };
  };

  return (
    <Text numberOfLines={numberOfLines ?? 1} style={[fontSize(), fontStyle(), colorStyle(), alignStyle(), style]}>
      {content}
    </Text>
  );
};

const styles = StyleSheet.create({
  normal: {
    fontStyle: 'normal',
    fontWeight: '400'
  },

  bold: {
    fontWeight: '700'
  },
  italic: {
    fontStyle: 'italic'
  }
});

export default MyText;
