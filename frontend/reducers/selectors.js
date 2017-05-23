const defaultChair = {
  id: 0,
  description: '',
  lat: 0,
  lng: 0,
  imageUrl: '',
  address: '',
  accepting_guests: true,
  about: '',
  bookings: []
};

export const selectChair = (state, ownProps) => {
  let chair;
  Object.keys(state.chairs.chairs).forEach(key => {
    if(key == ownProps.match.params.chairId) {
      chair = state.chairs.chairs[key];
    }
  });
  return chair || defaultChair;
};
