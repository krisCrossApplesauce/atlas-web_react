import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, LOGIN } from '../actions/uiActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {
    email: '',
    password: '',
    isLoggedIn: false,
  },
});

function uiReducer(state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true).set('user', { ...state.get('user'), isLoggedIn: true });
    case LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false).set('user', { ...state.get('user'), isLoggedIn: false });
    case LOGOUT:
      return state.set('isUserLoggedIn', false).set('user', initialState.get('user'));
    case LOGIN:
      return state.set('user', action.user);
    default:
      return state;
  }
}

export default uiReducer;
