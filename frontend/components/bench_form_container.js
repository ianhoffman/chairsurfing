import { connect } from 'react-redux';
import BenchForm from './bench_form';
import { createBench } from '../actions/bench_actions';

// const mapStateToProps = state => ({
//
// })

const mapDispatchToProps = dispatch => ({
  createBench: (bench) => dispatch(createBench(bench))
});

export default connect(
  null,
  mapDispatchToProps
)(BenchForm);
