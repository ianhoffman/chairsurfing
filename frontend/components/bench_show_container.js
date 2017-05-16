import { connect } from 'react-redux';
import BenchShow from './bench_show';
import { selectBench } from '../reducers/selectors';
import { fetchSingleBench } from '../actions/bench_actions';

const mapStateToProps = (state, ownProps) => ({
  bench: selectBench(state, ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSingleBench: () => dispatch(fetchSingleBench(ownProps.match.params.benchId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow);
