import {
  RECOVERY,
  CLOSE
} from "./constants";

export function recovery() {
  return {
    type: RECOVERY
  };
}

export function close() {
  return {
    type: CLOSE
  };
}

export default function recoveryPasswordActions(type) {
  return dispatch => {
    switch (type) {
      case RECOVERY:
        return dispatch(recovery());
      case CLOSE:
        return dispatch(close());
    }
  };
}