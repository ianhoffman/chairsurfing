import { connect } from 'react-redux';
import Search from './search';
import { fetchAllBenches } from '../actions/bench_actions';
import { updateFilter } from '../actions/filter_actions';

const mapStateToProps = state => {
  return {
    benches: state.benches,
    maxSeating: state.filters.maxSeating,
    minSeating: state.filters.minSeating
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllBenches: () => dispatch(fetchAllBenches()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
