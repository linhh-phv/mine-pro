import { ActionTypes, IActionGetBadgePayload, IActionGetIsConnectPayload, IAppAction } from './index';

interface ILocalState extends IActionGetBadgePayload, IActionGetIsConnectPayload {
  //
}
const initialState: ILocalState = {
  badge: 0,
  isConnect: true
};

const reducer = (state: ILocalState = initialState, action: IAppAction) => {
  switch (action.type) {
    case ActionTypes.GET_BADGE:
      return {
        ...state,
        badge: action.payload.badge
      };

    case ActionTypes.GET_IS_CONNECT:
      return {
        ...state,
        isConnect: action.payload.isConnect
      };

    default:
      return state;
  }
};

export default reducer;
