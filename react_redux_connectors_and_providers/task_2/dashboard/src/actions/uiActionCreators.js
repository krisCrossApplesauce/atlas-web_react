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

export function loginSuccess() {
  return { type: LOGIN_SUCCESS };
};

export function loginFailure() {
  return { type: LOGIN_FAILURE };
};

export function loginRequest(email, password) {
  return (dispatch) => {
    // console.log(`email: ${email}\npassword: ${password}`);
    // const loginAction = dispatch(login(email, password));
    return fetch('/login-success.json')
     .then((response) => {
        // if (response.ok) {
        //   console.log('response is ok');
        // } else {
        //   console.log('response is not ok');
        //   return dispatch(loginFailure());
        // }
        return response.json();
      })
      .then((data) => {
        // console.log(`data: ${data}\nemail: ${data.email}\npassword: ${data.password}\nisLoggedIn: ${data.isLoggedIn}`);
        // const loginSuccessAction = dispatch(loginSuccess());
        // console.log(`data: ${loginSuccessAction.user}\nemail: ${loginSuccessAction.user.email}\npassword: ${loginSuccessAction.user.password}\nisLoggedIn: ${loginSuccessAction.user.isLoggedIn}`);
        return dispatch(loginSuccess());
      })
      .catch((error) => {
        // console.log(`error: ${error}`);
        return dispatch(loginFailure());
      });
  };
}

export const bindUiActionCreators = (dispatch) => ({
  boundLogin: () => dispatch(login()),
  boundLogout: () => dispatch(logout()),
  boundDisplayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
  boundHideNotificationDrawer: () => dispatch(hideNotificationDrawer())
});
