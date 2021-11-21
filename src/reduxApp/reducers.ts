import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { reducer as signin } from './signin';
import { reducer as app } from './app';

const rootReducer = combineReducers({
  signin,
  app
  // videochat,
});

export type RootState = ReturnType<typeof rootReducer>;

export const selectState: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
