import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from "../actions/notificationActionTypes";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";
import { Map, fromJS } from 'immutable';

const initialState = Map({
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
  loading: false,
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
      return state.mergeDeep(fromJS({notifications: notificationsNormalizer(dataPlusIsRead).entities.notifications}));
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index], {...state.toJS()['notifications'][action.index], isRead: true});
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case SET_LOADING_STATE:
      return state.set('loading', action.isLoading);
    default:
      return state;
  }
}

export default notificationReducer;
