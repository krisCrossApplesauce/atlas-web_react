import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "./uiActionTypes";

export function login(email, password) {
  return ({
    type: LOGIN,
    user: {email, password},
  });
};

export function logout() {
  return { type: LOGOUT };
};

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user: user,
  };
};

export function loginFailure(user) {
  return {
    type: LOGIN_FAILURE,
    user: user,
  };
};

export function loginRequest(email, password) {
  return async (dispatch) => {
    dispatch(login(email, password));
    const response = await fetch('/login-success.json')
      .then((response) => { return response.json(); })
      .then(() => { return dispatch(loginSuccess()); })
      .catch(() => { return dispatch(loginFailure()); });
    console.log('response');
    console.log(response);
    return response;
  };
}

export const bindUiActionCreators = (dispatch) => ({
  boundLogin: () => dispatch(login()),
  boundLogout: () => dispatch(logout()),
  boundDisplayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
  boundHideNotificationDrawer: () => dispatch(hideNotificationDrawer())
});
