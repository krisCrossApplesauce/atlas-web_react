import courseReducer from "./courseReducer";
import { selectCourse, unSelectCourse, fetchCourseSuccess } from "../actions/courseActionCreators";

const data0 = [
  {
    id: 1,
    name: "ES6",
    credit: 60,
  },
  {
    id: 2,
    name: "Webpack",
    credit: 20
  },
  {
    id: 3,
    name: "React",
    credit: 40
  }
];

const data1 = courseReducer(undefined, fetchCourseSuccess(data0));

const data2 = [
  {
    id: 1,
    name: "ES6",
    isSelected: true,
    credit: 60,
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: true,
    credit: 20
  },
  {
    id: 3,
    name: "React",
    isSelected: true,
    credit: 40
  }
];

describe("tests courseReducer", () => {
  it("tests that courseReducer returns the data passed through the fetchCourseSuccess action", () => {
    const state = courseReducer(undefined, fetchCourseSuccess(data0));
    expect(state).toEqual([
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]);
  });

  it("tests that courseReducer returns the data with the correctly updated item when passing the selectCourse action", () => {
    const state = courseReducer(data1, selectCourse(2));
    expect(state).toEqual([
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]);
  });

  it("tests that courseReducer returns the data with the correctly updated item when passing the unSelectCourse action", () => {
    const state = courseReducer(data2, unSelectCourse(2));
    expect(state).toEqual([
      {
        id: 1,
        name: "ES6",
        isSelected: true,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: true,
        credit: 40
      }
    ]);
  });
});
