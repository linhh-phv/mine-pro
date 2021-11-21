import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Row, MyText, Center } from 'components';
import { DiscoverNavProps } from 'navigations/appsScreen/discoverScreens/type';
import titleScreen from 'constants/titleKeys';
import { Size } from 'styles/size';
import { Colors } from 'styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonStyles from 'styles/common';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SeparatorView from 'components/SeparatorView';
import { useIsFocused } from '@react-navigation/native';

const DiscoverScreen = (props: DiscoverNavProps<'DISCOVER_SCREEN'>) => {
  const { navigation, route } = props;
  const [searchQuery, setSearchQuery] = useState<string>('');

  const isFocused = useIsFocused();
  const searchRed = useRef<TextInput>(null);

  // useEffect(() => {
  //   if (isFocused) {
  //     searchRed.current?.focus();
  //   }
  // }, [isFocused]);

  const _onChangeTextSearch = (query: any) => setSearchQuery(query);

  const searchView = useMemo(() => {
    return (
      <Center nor style={CommonStyles.headerStyle}>
        {/* <Searchbar
          // ref={searchRed}
          placeholder={titleScreen.search.placeholder}
          onChangeText={_onChangeTextSearch}
          value={searchQuery}
          style={styles.searchView}
          inputStyle={{...CommonStyles.textRegular}}
          // onFocus={() => setShowResultSearch(false)}
          // onSubmitEditing={() => _onSearch(searchQuery)}
        /> */}
      </Center>
    );
  }, [searchQuery]);
  return (
    <SafeAreaView style={{ ...CommonStyles.container }}>
      <KeyboardAwareScrollView style={{ ...CommonStyles.container }} showsVerticalScrollIndicator={false}>
        {searchView}
        <SeparatorView height={1.2} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default DiscoverScreen;

const styles = StyleSheet.create({
  searchView: {
    borderRadius: Size.borderRadiusMax,
    backgroundColor: Colors.TAG,
    elevation: 0,
    height: Size.size40
  }
});
