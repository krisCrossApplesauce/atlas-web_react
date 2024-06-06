import rootReducer from "./rootReducer";
import { Map } from 'immutable';
import { NotificationTypeFilters } from "../actions/notificationActionTypes";

describe("tests for rootReducer", () => {
    it("tests root reducer's initial state", () => {
        const state = rootReducer();
        expect(state).toEqual({
            courses: Map([]),
            notifications: Map({
                notifications: [],
                filter: NotificationTypeFilters.DEFAULT,
            }),
            ui: Map({
                isNotificationDrawerVisible: false,
                isUserLoggedIn: false,
                user: {
                    email: '',
                    password: '',
                    isLoggedIn: false,
                },
            }),
        });
    });
});
