import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import { useScrollToTop } from '@react-navigation/native';
import { View, Text, StyleSheet, Keyboard, RefreshControl, SafeAreaView, Image, TouchableOpacity } from 'react-native';

import { SETTING_SCREEN } from 'constants/screenKeys';
import { ProfileNavProps } from 'navigations/appsScreen/profileScreens/type';
import { Center, MyIcon, Row, SeparatorView, MyText } from 'components';
import { Colors } from 'styles';
import { HeaderLeft, HeaderRight } from 'components/header';
import { Size } from 'styles/size';
import CommonStyles from 'styles/common';
import PopupSetting from 'components/popup';
import ContainerContentModal from 'components/popup/ContainerContent';
import PopupItem from 'components/popup/PopupItem';
import { Avatar, Banner, Surface } from 'react-native-paper';
import Images from 'assets/images';
import { Font } from 'styles/typography';
import { wait } from 'utils';

const HEIGHT_POPUP = Size.WINDOW_HEIGHT / 1.8;

const ProfileScreen = (props: ProfileNavProps<'PROFILE_SCREEN'>) => {
  const { navigation, route } = props;
  const [visiblePopUpMenu, setVisiblePopUpMenu] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);

  const sheetRef = useRef<BottomSheetBehavior>(null);
  const refScrollTop = useRef(null);
  useScrollToTop(refScrollTop);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const _onPressCreate = () => {
    console.log('press _onPressCreate');
  };

  const _onPressMenu = () => {
    setVisiblePopUpMenu(true);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      header: () => (
        <SafeAreaView style={{ backgroundColor: Colors.WHITE }}>
          <Row style={CommonStyles.headerStyle}>
            <HeaderLeft profile {...props} />
            <HeaderRight profile pressRight1={_onPressCreate} pressRight={_onPressMenu} />
          </Row>
          <SeparatorView height={1.2} />
        </SafeAreaView>
      )
    });
  }, []);

  const onPressSetting = () => {
    closePopup();
    setTimeout(() => {
      navigation.navigate({
        name: SETTING_SCREEN,
        params: {
          fromProfile: true
        }
      });
    }, 300);
  };

  const onPressAvatar = () => {
    console.log('press avatar');
  };

  const onOpendModal = () => {
    sheetRef.current?.snapTo(0);
  };

  const closePopup = () => {
    Keyboard.dismiss();
    setVisiblePopUpMenu(false);
  };

  const renderContent = () => {
    return (
      <ContainerContentModal height={HEIGHT_POPUP}>
        <PopupItem typeIcon="AntDesign" icon="setting" text="Cài đặt" onPress={onPressSetting} />
        <PopupItem typeIcon="MaterialIcons" icon="restore" text="Kho lưu trữ" onPress={onPressSetting} />
        <PopupItem typeIcon="Feather" icon="activity" text="Hoạt động của bạn" onPress={onPressSetting} />
        <PopupItem typeIcon="MaterialIcons" icon="qr-code" text="Mã QR" onPress={onPressSetting} />
        <PopupItem typeIcon="Feather" icon="bookmark" text="Đã lưu" onPress={onPressSetting} />
        <PopupItem typeIcon="MaterialCommunityIcons" icon="playlist-star" text="Bạn thân" onPress={onPressSetting} />
      </ContainerContentModal>
    );
  };

  const renderProfileView = useMemo(() => {
    return (
      <View>
        <Row style={{ padding: Size.size16 }}>
          <TouchableOpacity activeOpacity={0.8} onPress={onPressAvatar}>
            <Avatar.Image
              style={{ marginRight: Size.size16, backgroundColor: 'red' }}
              size={Size.size64}
              source={Images.ic_tabar_profile}
            />
          </TouchableOpacity>
          <View style={styles.iconAvatar}>
            <MyIcon
              type="SimpleLineIcons"
              name="plus"
              size={Size.sizeIconMin}
              color={Colors.WHITE}
              onPress={onPressAvatar}
            />
          </View>

          <Row style={{ ...CommonStyles.container }}>
            <View style={{ ...CommonStyles.container }}>
              <MyText center content="10" large bold />
              <MyText center content="Bài viết" regular />
            </View>
            <View style={{ ...CommonStyles.container }}>
              <MyText center content="163" large bold />
              <MyText center content="Người theo dõi" small />
            </View>
            <View style={{ ...CommonStyles.container }}>
              <MyText center content="86" large bold />
              <MyText center content="Đang theo dõi" small />
            </View>
          </Row>
        </Row>
        <View style={{ paddingHorizontal: Size.size16 }}>
          <MyText content="Linh Pham" regular bold />
          <MyText style={[{ lineHeight: Font.LINE_HEIGHT_24 }]} content="No bio yet" regular />
        </View>
      </View>
    );
  }, []);

  const renderBody = () => {
    return <View>{renderProfileView}</View>;
  };

  return (
    <View style={{ ...CommonStyles.container }}>
      <KeyboardAwareScrollView
        ref={refScrollTop}
        style={{ ...CommonStyles.container }}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {renderBody()}
        <PopupSetting
          sheetRef={sheetRef}
          visiblePopUpMenu={visiblePopUpMenu}
          heightSnap0={HEIGHT_POPUP}
          onOpen={onOpendModal}
          onClose={closePopup}
          renderContent={renderContent}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  modalContainer: {
    height: HEIGHT_POPUP,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  iconAvatar: {
    position: 'absolute',
    bottom: Size.size16,
    left: Size.size64,
    backgroundColor: Colors.PRIMARY,
    borderRadius: Size.borderRadiusMax
  }
});
