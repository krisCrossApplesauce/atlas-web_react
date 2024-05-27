import { markAsRead, setNotificationFilter } from "./notificationActionCreators";
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { NotificationTypeFilters } from "./notificationActionTypes";

describe("tests markAsRead from courseActionCreators", () => {
    it("tests that markAsRead(1) creates and returns the correct action", () => {
        const action = markAsRead(1);
        expect(action).toEqual({ type: MARK_AS_READ, index: 1 });
    });
});

describe("tests setNotificationFilter from courseActionCreators", () => {
    it("tests that setNotificationFilter(NotificationTypeFilters.DEFAULT) creates and returns the correct action", () => {
        const action = setNotificationFilter(NotificationTypeFilters.DEFAULT);
        expect(action).toEqual({ type: SET_TYPE_FILTER, filter: "DEFAULT" });
    });
});
