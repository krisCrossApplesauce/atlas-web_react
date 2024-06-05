import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";
import { Map } from 'immutable';

const initialState = Map({
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
});

function notificationReducer(state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const dataPlusIsRead = [];
      for (let i in action.data) {
        dataPlusIsRead.push({...action.data[i], isRead: false});
      }
      return state.set('notifications', notificationsNormalizer(dataPlusIsRead).entities.notifications);
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index], {...state.toJS()['notifications'][action.index], isRead: true});
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
}

export default notificationReducer;
