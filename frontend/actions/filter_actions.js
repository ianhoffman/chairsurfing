export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

import { fetchAllBenches } from './bench_actions';

const changeFilter = (filter, value) => ({
  type: UPDATE_BOUNDS,
  filter,
  value
});

export const updateBounds = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchAllBenches(getState().filters)(dispatch);
};
