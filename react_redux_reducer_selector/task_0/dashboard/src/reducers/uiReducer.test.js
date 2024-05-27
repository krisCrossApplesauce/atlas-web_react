import uiReducer from "./uiReducer";
import { selectCourse } from "../actions/courseActionCreators";
import { displayNotificationDrawer } from "../actions/uiActionCreators";

describe("tests uiReducer", () => {
  it("tests that uiReducer returns the initial state when no action is passed", () => {
    const state = uiReducer();
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it("tests that uiReducer returns the initial state when an action with type: SELECT_COURSE is passed", () => {
    const state = uiReducer(undefined, selectCourse());
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it("tests that uiReducer returns the correct state when an action with type: DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    const state = uiReducer(undefined, displayNotificationDrawer());
    expect(state).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    });
  });
});
