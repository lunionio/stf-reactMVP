import { OPEN_WORK, CLOSE_WORK, WORK_FINISHED } from "./constants";

export function openWork() {
  return {
    type: OPEN_WORK
  };
}

export function closeWork() {
  return {
    type: CLOSE_WORK
  };
}

export function workFinished() {
  return {
    type: WORK_FINISHED
  };
}

export default function workActions(type) {
  return dispatch => {
    switch (type) {
      case OPEN_WORK:
        return dispatch(openWork());
      case CLOSE_WORK:
        return dispatch(closeWork());
      case WORK_FINISHED:
        return dispatch(workFinished());
    }
  };
}
