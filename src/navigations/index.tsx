import React, { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

import AuthScreens from 'navigations/authScreen';
import AppsScreens from 'navigations/appsScreen';
import { selectState } from 'reduxApp/reducers';
import { useDispatch } from 'react-redux';
import { getIsConnectAction } from 'reduxApp/app/actions';

const MainNavigation = () => {
  const dispatch = useDispatch();

  const { token } = selectState((state) => state.signin);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      dispatch(
        getIsConnectAction({
          isConnect: state.isConnected ?? false
        })
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (token) {
    return <AuthScreens />;
  } else {
    return <AppsScreens />;
  }
};

export default MainNavigation;
