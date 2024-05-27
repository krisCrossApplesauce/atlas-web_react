import notificationReducer from "./notificationReducer";
import { markAsRead, setNotificationFilter, fetchNotificationsSuccess } from "../actions/notificationActionCreators";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";

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

const testState = {
  filter: "DEFAULT",
  notifications: [
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
  ]
};

describe("tests notificationReducer", () => {
  it("tests that notificationReducer returns the data passed through the fetchNotificationsSuccess action", () => {
    const state = notificationReducer(undefined, fetchNotificationsSuccess(testData));
    expect(state).toEqual({
      filter: "DEFAULT",
      notifications: [
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
      ]
    });
  });

  it("tests that notificationReducer returns the data with the correctly updated item when passing the markAsRead action", () => {
    const state = notificationReducer(testState, markAsRead(2));
    expect(state).toEqual({
      filter: "DEFAULT",
      notifications: [
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
      ]
    });
  });

  it("tests that notificationReducer returns the data with the correctly updated item when passing the setNotificationFilter action", () => {
    const state = notificationReducer(testState, setNotificationFilter(NotificationTypeFilters.URGENT));
    expect(state).toEqual({
      filter: "URGENT",
      notifications: [
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
      ]
    });
  });
});
