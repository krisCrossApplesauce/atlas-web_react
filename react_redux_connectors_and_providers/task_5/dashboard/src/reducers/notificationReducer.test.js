import notificationReducer from "./notificationReducer";
import { markAsRead, setNotificationFilter, fetchNotificationsSuccess } from "../actions/notificationActionCreators";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";
import { Map } from 'immutable';
import { notificationsNormalizer } from "../schema/notifications";

const testData = [
  {
    id: 1,
    isRead: false,
    type: "default",
    value: "New course available"
  },
  {
    id: 2,
    isRead: false,
    type: "urgent",
    value: "New resume available"
  },
  {
    id: 3,
    isRead: false,
    type: "urgent",
    value: "New data available"
  }
];

const testState = Map({
  filter: "DEFAULT",
  notifications: notificationsNormalizer([
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: false,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }
  ]).entities.notifications,
  loading: false,
});

describe("tests notificationReducer", () => {
  it("tests that notificationReducer returns the data passed through the fetchNotificationsSuccess action", () => {
    const stateMap = notificationReducer(undefined, fetchNotificationsSuccess(testData));
    const state = stateMap.toJS();
    expect(state).toEqual({
      filter: "DEFAULT",
      notifications: notificationsNormalizer([
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]).entities.notifications,
      loading: false,
    });
  });

  it("tests that notificationReducer returns the data with the correctly updated item when passing the markAsRead action", () => {
    const stateMap = notificationReducer(testState, markAsRead(2));
    const state = stateMap.toJS();
    expect(state).toEqual({
      filter: "DEFAULT",
      notifications: notificationsNormalizer([
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]).entities.notifications,
      loading: false,
    });
  });

  it("tests that notificationReducer returns the data with the correctly updated item when passing the setNotificationFilter action", () => {
    const stateMap = notificationReducer(testState, setNotificationFilter(NotificationTypeFilters.URGENT));
    const state = stateMap.toJS();
    expect(state).toEqual({
      filter: "URGENT",
      notifications: notificationsNormalizer([
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]).entities.notifications,
      loading: false,
    });
  });
});
