import * as BenchesAPIUtil from '../util/benches_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';

const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

const receiveBench = bench => ({
  type: RECEIVE_BENCH,
  bench
});

export const fetchAllBenches = filters => dispatch => (
  BenchesAPIUtil.fetchAllBenches(filters).then(
    res => dispatch(receiveBenches(res))
  )
);

export const createBench = bench => dispatch => (
  BenchesAPIUtil.createBench(bench).then(
    res => dispatch(receiveBench(bench))
  )
);
