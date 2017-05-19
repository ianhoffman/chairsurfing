import * as ChairsAPIUtil from '../util/chairs_api_util';

export const RECEIVE_CHAIRS = 'RECEIVE_CHAIRS';
export const RECEIVE_CHAIR = 'RECEIVE_CHAIR';
export const RECEIVE_CHAIR_ERRORS = 'RECEIVE_CHAIR_ERRORS';
export const SET_USER_CHAIR = 'SET_USER_CHAIR';

const receiveChairs = chairs => ({
  type: RECEIVE_CHAIRS,
  chairs
});

const setUserChair = chair => ({
  type: SET_USER_CHAIR,
  chair
});

const receiveChair = chair => ({
  type: RECEIVE_CHAIR,
  chair
});

const receiveChairErrors = errors => ({
  type: RECEIVE_CHAIR_ERRORS,
  errors
});

export const fetchAllChairs = filters => dispatch => (
  ChairsAPIUtil.fetchAllChairs(filters).then(
    res => dispatch(receiveChairs(res))
  )
);

export const fetchSingleChair = id => dispatch => (
  ChairsAPIUtil.fetchSingleChair(id).then(
    res => dispatch(receiveChair(res))
  )
);

export const createChair = chair => dispatch => (
  ChairsAPIUtil.createChair(chair).then(
    res => {
      dispatch(receiveChair(res));
      dispatch(setUserChair(res));
      return res;
    },
    err => {
      dispatch(receiveChairErrors(err.responseJSON));
    }
  )
);
