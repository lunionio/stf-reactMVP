import {
  RECOVERY,
  CLOSE
} from "../../actions/recoveryPasswordActions/constants";

const initialState = {
  show: false
};

export default function recoveryPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case RECOVERY:
      return {
        ...state,
        show: true     
      };
    case CLOSE:
      return {
        ...state,
        show: false       
      };   
    default:
      return state;
  }
}
