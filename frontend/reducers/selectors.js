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

const initialChair = {
  description: '',
  address: '',
  about: '',
  lat: 0,
  lng: 0,
  imageUrl: '',
  image: [],
  accepting_guests: true,
  user_id: null
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

export const selectBookings = (state, ownProps) => {
  const bookings = [];
  const chairId = parseInt(ownProps.match.path.split('/'));
  Object.keys(state.bookings).forEach(key => {
    if(state.bookings[key].chairId === chairId) {
      bookings.push(state.bookings[key]);
    }
  });
  return bookings;
};

export const getUserChair = (state) => {
  const chairId = state.session.currentUser.chair_id;
  const chairs = state.chairs.chairs;
  let chair;

  Object.keys(chairs).forEach(key => {
    if(chairs[key].id == chairId) {
      chair = chairs[key];
    }
  });
  return chair || initialChair;
};
