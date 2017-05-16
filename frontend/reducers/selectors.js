export const selectBench = (state, ownProps) => {
  let chair;
  Object.keys(state.chairs).forEach(key => {
    if(key == ownProps.match.params.chairId) {
      chair = state.chairs[key];
    }
  });
  return chair || { decription: '', lat: 0, lng: 0, seating: '' };
};
