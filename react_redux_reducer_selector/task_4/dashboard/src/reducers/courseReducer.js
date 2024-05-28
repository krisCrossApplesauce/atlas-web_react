import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import coursesNormalizer from '../schema/courses';
import { Map } from 'immutable';

function courseReducer(state = Map([]), action) {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const dataPlusIsSelected = [];
      for (let i in action.data) {
        dataPlusIsSelected.push({...action.data[i], isSelected: false});
      }
      return state.merge(coursesNormalizer(dataPlusIsSelected).entities.courses);
    case SELECT_COURSE:
      return state.setIn([action.index], {...state.toJS()[action.index], isSelected: true});
    case UNSELECT_COURSE:
      return state.setIn([action.index], {...state.toJS()[action.index], isSelected: false});
    default:
      return state;
  }
}

export default courseReducer;
