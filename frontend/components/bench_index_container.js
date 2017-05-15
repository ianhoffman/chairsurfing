import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { fetchAllBenches } from '../actions/bench_actions';

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  fetchAllBenches: () => dispatch(fetchAllBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
