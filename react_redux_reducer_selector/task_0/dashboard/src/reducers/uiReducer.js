import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';

const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
};

function uiReducer(state = initialState, action) {
    if (action === undefined) {
        return state;
    }

    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return { ...state, isNotificationDrawerVisible: true };
        case HIDE_NOTIFICATION_DRAWER:
            return { ...state, isNotificationDrawerVisible: false };
        case LOGIN_SUCCESS:
            return { ...state, isUserLoggedIn: true };
        case LOGIN_FAILURE:
            return {...state, isUserLoggedIn: false};
        case LOGOUT:
            return {...state, isUserLoggedIn: false};
        default:
            console.log('no action');
            return state;
    }
}

export default uiReducer;
