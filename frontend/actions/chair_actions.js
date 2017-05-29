import * as ChairsAPIUtil from '../util/chairs_api_util';

export const RECEIVE_CHAIRS = 'RECEIVE_CHAIRS';
export const RECEIVE_CHAIR = 'RECEIVE_CHAIR';
export const RECEIVE_CHAIR_ERRORS = 'RECEIVE_CHAIR_ERRORS';
export const SET_USER_CHAIR = 'SET_USER_CHAIR';
export const STOP_FETCHING = 'STOP_FETCHING';
export const START_FETCHING = 'START_FETCHING';

const receiveChairs = chairs => ({
  type: RECEIVE_CHAIRS,
  chairs
});

export const setUserChair = id => ({
  type: SET_USER_CHAIR,
  id
});

const receiveChair = chair => ({
  type: RECEIVE_CHAIR,
  chair
});

const receiveChairErrors = errors => ({
  type: RECEIVE_CHAIR_ERRORS,
  errors
});

const stopFetching = () => ({
  type: STOP_FETCHING
});

export const startFetching = () => ({
  type: START_FETCHING
});

export const updateChair = chair => dispatch => (
  ChairsAPIUtil.updateChair(chair).then(
    res => {
      dispatch(receiveChair(res));
      dispatch(setUserChair(res.id));
      return res;
    },
    err => {
      dispatch(receiveChairErrors(err.responseJSON));
    }
  )
);

export const fetchAllChairs = filters => dispatch => (
  ChairsAPIUtil.fetchAllChairs(filters).then(
    res => {
      dispatch(receiveChairs(res));
      return res;
    }
  )
);

export const fetchSingleChair = id => dispatch => (
  ChairsAPIUtil.fetchSingleChair(id).then(
    res => {
      dispatch(receiveChair(res));
      dispatch(stopFetching());
      return res;
    }
  )
);

export const createChair = chair => dispatch => (
  ChairsAPIUtil.createChair(chair).then(
    res => {
      dispatch(receiveChair(res));
      dispatch(setUserChair(res.id));
      return res;
    },
    err => {
      dispatch(receiveChairErrors(err.responseJSON));
    }
  )
);
