import { connect } from 'react-redux';
import ChairShow from './chair_show';
import { selectChair } from '../../reducers/selectors';
import { fetchSingleChair } from '../../actions/chair_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    chair: selectChair(state, ownProps)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSingleChair: (id) => dispatch(fetchSingleChair(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChairShow);
