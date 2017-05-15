import { connect } from 'react-redux';
import Search from './search';
import { fetchAllBenches } from '../actions/bench_actions';
import { updateBounds } from '../actions/filter_actions';

const mapStateToProps = state => {
  return { benches: state.benches };
};

const mapDispatchToProps = dispatch => ({
  fetchAllBenches: () => dispatch(fetchAllBenches()),
  updateBounds: (filter, bounds) => dispatch(updateBounds(filter, bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
