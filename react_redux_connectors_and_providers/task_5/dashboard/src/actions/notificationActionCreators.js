import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from "./notificationActionTypes";

export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter
});

export const fetchNotificationsSuccess = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data
});

export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  isLoading
});

export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  notifications
});

export const fetchNotifications = () => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    await fetch("/notifications.json")
      .then(response => response.json())
      .then(data => dispatch(setNotifications(data)))
      .catch(() => dispatch(setLoadingState(false)));
    dispatch(setLoadingState(false));
  }
};

export const bindNotificationActionCreators = (dispatch) => ({
  boundMarkAsRead: (index) => dispatch(markAsRead(index)),
  boundSetNotificationFilter: (filter) => dispatch(setNotificationFilter(filter)),
  // boundFetchNotificationsSuccess: (data) => dispatch(fetchNotificationsSuccess(data))
});
