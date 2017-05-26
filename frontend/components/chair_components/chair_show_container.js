import { connect } from 'react-redux';
import ChairShow from './chair_show';
import { selectChair } from '../../reducers/selectors';
import { fetchSingleChair } from '../../actions/chair_actions';

const mapStateToProps = (state, ownProps) => ({
  chair: selectChair(state, ownProps),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSingleChair: () => dispatch(fetchSingleChair(ownProps.match.params.chairId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChairShow);
