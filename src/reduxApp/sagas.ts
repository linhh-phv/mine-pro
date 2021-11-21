import { all, fork } from 'redux-saga/effects';
import { loginSaga } from './signin';

export default function* rootSaga() {
  yield all([fork(loginSaga)]);
}
