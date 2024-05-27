import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";

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

export const bindNotificationActionCreators = (dispatch) => ({
    boundMarkAsRead: (index) => dispatch(markAsRead(index)),
    boundSetNotificationFilter: (filter) => dispatch(setNotificationFilter(filter)),
    // boundFetchNotificationsSuccess: (data) => dispatch(fetchNotificationsSuccess(data))
});
