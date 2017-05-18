import React from 'react';
import ChairMap from './chair_map';
import RentalForm from '../booking_components/rental_form';
import ChairShowMap from './chair_show_map';
import { Link, Route } from 'react-router-dom';

class ChairShow extends React.Component {
  componentDidMount() {
    this.props.fetchSingleChair();
    let path = this.props.location.pathname.split('/');
    let curr = path[path.length - 1];

    switch (curr) {
      case 'description':
        document.getElementById('description').focus();
        break;
      case 'location':
        document.getElementById('location').focus();
        break;
      case 'reviews':
        document.getElementById('reviews').focus();
        break;
      default:
        break;
    }
      // .then(({ chair }) => this.renderChair(chair));
  }
  //
  componentWillReceiveProps(newProps) {
    if(parseInt(newProps.match.params.chairId) !== this.props.chair.id) {
      this.props.fetchSingleChair();
        // .then(({ chair }) => this.renderChair(chair));
    }
  }

  render() {
    const { chair } = this.props;

    return(
      <section className='chair-show'>
        <section className='chair-info'>
          <section className='chair-description'>
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
                component={RentalForm} />
              <Route
                path={`/chairs/${chair.id}/location`}
                render={() => <ChairShowMap chair={chair}/>} />
            </div>
          </section>
          <section className='chair-map'>

          </section>
        </section>
        <section className='chair-img'>
          <div className='chair-container'>
            <img src={chair.imageUrl} />
          </div>
        </section>
      </section>
    );
  }

}

export default ChairShow;
