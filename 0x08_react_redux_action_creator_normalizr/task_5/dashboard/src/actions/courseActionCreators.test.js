import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("tests selectCourse from courseActionCreators", () => {
    it("tests that selectCourse(1) creates and returns the correct action", () => {
        const action = selectCourse(1);
        expect(action).toEqual({ type: SELECT_COURSE, index: 1 });
    });
});

describe("tests unSelectCourse from courseActionCreators", () => {
    it("tests that unSelectCourse(1) creates and returns the correct action", () => {
        const action = unSelectCourse(1);
        expect(action).toEqual({ type: UNSELECT_COURSE, index: 1 });
    });
});
