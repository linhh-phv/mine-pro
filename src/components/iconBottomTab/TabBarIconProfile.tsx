import React from 'react';
import { Image } from 'react-native';
import Images from 'assets/images';
import { Size } from 'styles/size';

const TabBarIconProfile = () => {
  return (
    <Image
      source={Images.ic_tabar_profile}
      style={{
        width: Size.sizeIcon,
        height: Size.sizeIcon,
        borderRadius: Size.borderRadiusMax
      }}
    />
  );
};
export default TabBarIconProfile;
