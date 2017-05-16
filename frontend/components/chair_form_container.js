import { connect } from 'react-redux';
import ChairForm from './chair_form';
import { createChair } from '../actions/chair_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    lat: new URLSearchParams(ownProps.location.search).get("lat"),
    lng: new URLSearchParams(ownProps.location.search).get("lng")
  });
};

const mapDispatchToProps = dispatch => ({
  createChair: (chair) => dispatch(createChair(chair))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChairForm);
