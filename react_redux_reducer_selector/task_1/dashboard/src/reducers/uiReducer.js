import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';
import { Map } from 'immutable';

const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
};

// const initialState = Map({
//     isNotificationDrawerVisible: false,
//     isUserLoggedIn: false,
//     user: {},
// });

function uiReducer(state = initialState, action) {
    const stateMap = Map(state);

    if (action === undefined) {
        return stateMap;
    }

    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return stateMap.set('isNotificationDrawerVisible', true);
        case HIDE_NOTIFICATION_DRAWER:
            return stateMap.set('isNotificationDrawerVisible', false);
        case LOGIN_SUCCESS:
            return stateMap.set('isUserLoggedIn', true);
        case LOGIN_FAILURE:
            return stateMap.set('isUserLoggedIn', false);
        case LOGOUT:
            return stateMap.set('isUserLoggedIn', false);
        default:
            return stateMap;
    }
}

export default uiReducer;
