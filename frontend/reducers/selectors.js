export const selectBench = (state, ownProps) => {
  let bench;
  Object.keys(state.benches).forEach(key => {
    if(key == ownProps.match.params.benchId) {
      bench = state.benches[key];
    }
  });
  return bench;
};
