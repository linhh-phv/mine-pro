import { ActionTypes, ILoginAction } from './index';
import { IUser } from 'constants/user';

interface IlocalState extends IUser {
  loading: boolean;
}
const initialState: IlocalState = {
  id: '',
  name: '',
  email: '',
  token: '',
  loading: false
};

const reducer = (state: IlocalState = initialState, action: ILoginAction) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        loading: true
      };

    case ActionTypes.SAVE_INFO_USER:
      // receive data from saga
      const { id, name, token } = action.payload.body;
      return {
        ...state,
        id: id,
        name: name,
        token: token,
        loading: false
      };

    case ActionTypes.LOG_OUT:
      return { ...state, token: '' };

    default:
      return state;
  }
};

export default reducer;
