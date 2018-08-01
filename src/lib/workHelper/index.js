export const workHelper = {
  openWork: function(dispatch) {
    return dispatch("OPEN_WORK");
  },
  closeWork: function(dispatch) {
    return dispatch("CLOSE_WORK");
  },
  workFinished: function(dispatch) {
    return dispatch("WORK_FINISHED");
  }
};
