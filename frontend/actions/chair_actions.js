import * as ChairsAPIUtil from '../util/chairs_api_util';

export const RECEIVE_CHAIRS = 'RECEIVE_CHAIRS';
export const RECEIVE_CHAIR = 'RECEIVE_CHAIR';

const receiveChairs = chairs => ({
  type: RECEIVE_CHAIRS,
  chairs
});

const receiveChair = chair => ({
  type: RECEIVE_CHAIR,
  chair
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
    res => dispatch(receiveChair(chair))
  )
);
