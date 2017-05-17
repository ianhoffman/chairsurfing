import { connect } from 'react-redux';
import Search from './search';
import { fetchAllChairs } from '../actions/chair_actions';
import { updateFilter } from '../actions/filter_actions';

const mapStateToProps = state => {
  return {
    chairs: state.chairs,
    maxSeating: state.filters.maxSeating,
    minSeating: state.filters.minSeating,
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllChairs: () => dispatch(fetchAllChairs()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
