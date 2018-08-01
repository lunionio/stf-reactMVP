import {
  OPEN_WORK,
  CLOSE_WORK,
  WORK_FINISHED
} from "../../actions/workActions/constants";

const initialState = {
  show: false
};

export default function workReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_WORK:
      return {
        ...state,
        show: true,
        workFinished: false
      };
    case CLOSE_WORK:
      return {
        ...state,
        show: false,
        workFinished: false
      };
    case WORK_FINISHED:
      return {
        ...state,
        show: true,
        workFinished: true
      };
    default:
      return state;
  }
}
