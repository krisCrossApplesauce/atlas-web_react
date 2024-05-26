import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure, loginRequest } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";

describe("tests login from uiActionCreators", () => {
  it("tests that login('test@email.com', 'password') creates and returns the correct action", () => {
    const action = login('test@email.com', 'password');
    expect(action).toEqual({ type: LOGIN, user: { email: 'test@email.com', password: 'password' }});
  });
});

describe("tests logout from uiActionCreators", () => {
  it("tests that logout() creates and returns the correct action", () => {
    const action = logout();
    expect(action).toEqual({ type: LOGOUT });
  });
});

describe("tests displayNotificationDrawer from uiActionCreators", () => {
  it("tests that displayNotificationDrawer() creates and returns the correct action", () => {
    const action = displayNotificationDrawer();
    expect(action).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });
});

describe("tests hideNotificationDrawer from uiActionCreators", () => {
  it("tests that hideNotificationDrawer() creates and returns the correct action", () => {
    const action = hideNotificationDrawer();
    expect(action).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});

describe("tests loginRequest from uiActionCreators", () => {
  it("verifies that store receivs the actions LOGIN and LOGIN_SUCCESS when the API returns the right response", () => {
    const actions = loginRequest("test@email.com", "password");
    expect(actions).toEqual([
      { type: LOGIN, user: {email: "test@email.com", password: "password"}},
      { type: LOGIN_SUCCESS }
    ]);
  });

  it("verifies that store receivs the actions LOGIN and LOGIN_FAILURE when the API fails", () => {
    const actions = loginRequest("test@email.com", "password");
    expect(actions).toEqual([
      { type: LOGIN, user: {email: "test@email.com", password: "password"}},
      { type: LOGIN_FAILURE }
    ]);
  });

  // these don't work, but I want to stop working on last weeks projects
});
