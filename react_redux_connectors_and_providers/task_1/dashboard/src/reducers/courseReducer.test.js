import courseReducer from "./courseReducer";
import { selectCourse, unSelectCourse, fetchCourseSuccess } from "../actions/courseActionCreators";
import coursesNormalizer from '../schema/courses';
import { Map } from 'immutable';

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

const data2 = Map(coursesNormalizer([
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
]).entities.courses);

describe("tests courseReducer", () => {
  it("tests that courseReducer returns the data passed through the fetchCourseSuccess action", () => {
    const stateMap = courseReducer(undefined, fetchCourseSuccess(data0));
    const state = stateMap.toJS();
    expect(state).toEqual(coursesNormalizer([
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
    ]).entities.courses);
  });

  it("tests that courseReducer returns the data with the correctly updated item when passing the selectCourse action", () => {
    const stateMap = courseReducer(data1, selectCourse(2));
    const state = stateMap.toJS();
    expect(state).toEqual(coursesNormalizer([
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
    ]).entities.courses);
  });

  it("tests that courseReducer returns the data with the correctly updated item when passing the unSelectCourse action", () => {
    const stateMap = courseReducer(data2, unSelectCourse(2));
    const state = stateMap.toJS();
    expect(state).toEqual(coursesNormalizer([
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
    ]).entities.courses);
  });
});
