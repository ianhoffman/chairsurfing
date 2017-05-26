import React from 'react';
import ChairMap from './chair_map';
import RentalFormContainer from '../booking_components/rental_form_container';
import ChairShowMap from './chair_show_map';
import ReviewIndexComponent from '../review_components/review_index_container';
import { Link, Route } from 'react-router-dom';

class ChairShow extends React.Component {
  constructor(props) {
    super(props);
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
              <a href={`#/chairs/${chair.id}/description`}
              id='description'>Description</a>

              <a href={`#/chairs/${chair.id}/location`}
              id='location'>Location</a>

              <a href={`#/chairs/${chair.id}/reviews`}
              id='reviews'>Reviews</a>
            </div>

            <div className='chair-specs'>
              <Route
                path={`/chairs/${chair.id}/description`}
                render={() =>
                  <RentalFormContainer
                    chair={chair} />} />

              <Route
                path={`/chairs/${chair.id}/location`}
                render={() => <ChairShowMap chair={chair}/>} />

              <Route
                path={`/chairs/:chairId/reviews`}
                component={ReviewIndexComponent} />
            </div>
          </section>

          <div className='img-container'>
            <img className='chair-img' src={chair.imageUrl} />
          </div>
        </section>

      </section>
    );
  }

}

export default ChairShow;
