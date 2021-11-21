import React from 'react';

import { View } from 'react-native';

interface Props {
  height?: number;
  width?: number;
  color?: string;
  opacity?: number;
}

const SeparatorView: React.FC<Props> = (props: Props) => {
  const { height, width, color, opacity } = props;
  return (
    <View
      style={{
        height: height ?? 2,
        width: width ?? '100%',
        backgroundColor: color ?? '#F0F0F0',
        opacity: opacity ?? 1
      }}
    />
  );
};
export default SeparatorView;
