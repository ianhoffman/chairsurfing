import { connect } from 'react-redux';
import ChairShow from './chair_show';
import { selectChair } from '../../reducers/selectors';
import { fetchSingleChair, startFetching } from '../../actions/chair_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    chair: selectChair(state, ownProps),
    isFetching: state.chairs.fetching
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSingleChair: (id) => dispatch(fetchSingleChair(id)),
  startFetching: () => dispatch(startFetching())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChairShow);
