import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

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
