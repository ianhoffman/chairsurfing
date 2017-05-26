import React from 'react';
import ChairMap from './chair_map';
import RentalFormContainer from '../booking_components/rental_form_container';
import ChairShowMap from './chair_show_map';
import ReviewIndexComponent from '../review_components/review_index_container';
import ChairImg from './chair_img';
import { Link, Route } from 'react-router-dom';
import ReactResizeDetector from 'react-resize-detector';

class ChairShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageVisibile: true
    };
    this.parsePath = this.parsePath.bind(this);
    this.onResize = this.onResize.bind(this);
    this.selected = this.parsePath();
  }

  parsePath() {
    let fullPath = this.props.location.pathname.split('/');
    return fullPath[fullPath.length - 1];
  }

  componentDidMount() {
    if(this.props.chair.id === 0) {
      this.props.fetchSingleChair(this.props.match.params.chairId);
    }
  }

  componentWillReceiveProps(newProps) {
    if(parseInt(newProps.match.params.chairId) !== this.props.chair.id) {
      this.props.fetchSingleChair(newProps.match.params.chairId);
    }

    const oldPath = this.parsePath();
    const newFullPath = newProps.location.pathname.split('/');
    const newPath = newFullPath[newFullPath.length - 1];

    if((newPath === 'reviews' || newPath === 'location') &&
      (window.innerWidth <= 1230)) {
        this.setState({imageVisible: false});
    } else {
      this.setState({imageVisible: true});
    }

    $(`#${this.newPath}`).focus();
  }

  onResize() {
    const path = this.parsePath();
    if (window.innerWidth <= 1230 &&
      path === 'location' || path === 'reviews') {
        this.setState({imageVisible: false});
    } else {
      this.setState({imageVisible: true});
    }
  }

  render() {
    const { chair } = this.props;


    return(
      <section className='content'>
        <section className='chair-show'>
          <section className='chair-info'>
            <h2>
              {chair.description.toUpperCase()}
            </h2>

            <div className='chair-links'>
              <Link to={`/chairs/${chair.id}/description`}
                id='description'>Description</Link>

              <Link to={`/chairs/${chair.id}/location`}
                id='location'>Location</Link>

              <Link to={`/chairs/${chair.id}/reviews`}
                id='reviews'>Reviews</Link>
            </div>

            <div className='chair-specs'>
              <Route
                path={`/chairs/:chairId/description`}
                render={() =>
                  <RentalFormContainer
                    chair={chair} />} />

              <Route
                path={`/chairs/:chairId/location`}
                render={() => <ChairShowMap chair={chair}/>} />

              <Route
                path={`/chairs/:chairId/reviews`}
                component={ReviewIndexComponent} />
            </div>
          </section>

          <ReactResizeDetector
            handleWidth
            onResize={this.onResize} />

          {this.state.imageVisible ? (
            <Route
              path={`/chairs/:chairId/`}
              render={() => (
                  <ChairImg
                    imageUrl={chair.imageUrl} />
                ) } />
              ) : (
                ''
            )}
        </section>

      </section>
    );
  }

}

export default ChairShow;
