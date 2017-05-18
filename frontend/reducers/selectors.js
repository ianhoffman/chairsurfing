const defaultChair = {
  description: '',
  lat: 0,
  lng: 0,
  imageUrl: '',
  address: ''
};

export const selectChair = (state, ownProps) => {
  let chair;
  Object.keys(state.chairs).forEach(key => {
    if(key == ownProps.match.params.chairId) {
      chair = state.chairs[key];
    }
  });
  return chair || defaultChair;
};
