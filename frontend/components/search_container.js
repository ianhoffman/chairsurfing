import { connect } from 'react-redux';
import Search from './search';
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
)(Search);
