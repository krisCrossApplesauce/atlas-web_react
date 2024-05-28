import uiReducer from "./uiReducer";
import { selectCourse } from "../actions/courseActionCreators";
import { displayNotificationDrawer } from "../actions/uiActionCreators";

describe("tests uiReducer", () => {
  it("tests that uiReducer returns the initial state when no action is passed", () => {
    const stateMap = uiReducer();
    const state = stateMap.toJS();
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it("tests that uiReducer returns the initial state when an action with type: SELECT_COURSE is passed", () => {
    const stateMap = uiReducer(undefined, selectCourse());
    const state = stateMap.toJS();
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it("tests that uiReducer returns the correct state when an action with type: DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    const stateMap = uiReducer(undefined, displayNotificationDrawer());
    const state = stateMap.toJS();
    expect(state).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    });
  });
});
