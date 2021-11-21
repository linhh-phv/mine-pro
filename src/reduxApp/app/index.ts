import { Action } from 'redux';
import { IActionCallback } from 'constants/base';
import * as actions from './actions';
import reducer from './reducers';

// define action types
export enum ActionTypes {
  GET_BADGE = 'GET_BADGE',
  GET_IS_CONNECT = 'GET_IS_CONNECT'
}

//type Payload
export interface IActionGetBadgePayload extends IActionCallback<string> {
  badge: number;
}
export interface IActionGetIsConnectPayload extends IActionCallback<string> {
  isConnect: boolean;
}

//typeof actions
export interface IActionTypeGetBadge extends Action {
  type: ActionTypes.GET_BADGE;
  payload: IActionGetBadgePayload;
}
export interface IActionTypeGetIsConnect extends Action {
  type: ActionTypes.GET_IS_CONNECT;
  payload: IActionGetIsConnectPayload;
}

//export actions
export type IAppAction = IActionTypeGetBadge | IActionTypeGetIsConnect;

export { actions, reducer };
