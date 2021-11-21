import {
  IActionGetBadgePayload,
  IActionTypeGetBadge,
  ActionTypes,
  IActionTypeGetIsConnect,
  IActionGetIsConnectPayload
} from './index';

// Actions contain type and input value when is called
export function getBagdeAction(payload: IActionGetBadgePayload): IActionTypeGetBadge {
  return {
    type: ActionTypes.GET_BADGE,
    payload
  };
}
export function getIsConnectAction(payload: IActionGetIsConnectPayload): IActionTypeGetIsConnect {
  return {
    type: ActionTypes.GET_IS_CONNECT,
    payload
  };
}
