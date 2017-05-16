export const UPDATE_FILTER = "UPDATE_FILTER";

import { fetchAllChairs } from './chair_actions';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchAllChairs(getState().filters)(dispatch);
};
