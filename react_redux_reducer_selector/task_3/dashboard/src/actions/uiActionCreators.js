import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "./uiActionTypes";

export const login = (email, password) => ({
  type: LOGIN,
  user: {email, password},
});

export const logout = () => ({
  type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));
    try {
      fetch('../../dist/login-success.json')
        .then((response) => {
          if (response.ok) {
            dispatch(loginSuccess());
          } else {
            console.log('response is not ok');
            dispatch(loginFailure());
          }
        });
    } catch {
      dispatch(loginFailure());
    }
  };
}

export const bindUiActionCreators = (dispatch) => ({
  boundLogin: () => dispatch(login()),
  boundLogout: () => dispatch(logout()),
  boundDisplayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
  boundHideNotificationDrawer: () => dispatch(hideNotificationDrawer())
});
