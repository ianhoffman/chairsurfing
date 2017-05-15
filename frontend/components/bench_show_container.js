import { connect } from 'react-redux';
import BenchShow from './bench_show';
import { fetchSingleBench } from '../actions/bench_actions';
import { selectBench } from '../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  bench: selectBench(state, ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSingleBench: () =>
    dispatch(fetchSingleBench(ownProps.match.params.benchId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow);
