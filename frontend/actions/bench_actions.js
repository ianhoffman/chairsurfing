import * as BenchesAPIUtil from '../util/benches_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

export const fetchAllBenches = () => dispatch => (
  BenchesAPIUtil.fetchAllBenches().then(
    res => dispatch(receiveBenches(res))
  )
);
