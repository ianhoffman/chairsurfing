import React from 'react';
import ChairMap from './chair_map';
import RentalForm from '../booking_components/rental_form';

class ChairShow extends React.Component {
  componentDidMount() {
    this.props.fetchSingleChair().then(
      ({ chair }) => this.renderChair(chair)
    );
  }

  renderChair(chair) {
    // const mapOptions = {
    //   center: {
    //     lat: chair.lat,
    //     lng: chair.lng
    //   },
    //   zoom: 13,
    //   gestureHandling: 'none',
    //   scrollwheel: false
    // };
    //
    // this.map = new google.maps.Map(this.mapNode, mapOptions);
    //
    // var latLng = { lat: chair.lat, lng: chair.lng };
    // new google.maps.Marker({
    //   position: latLng,
    //   map: this.map
    // });
  }

  componentWillReceiveProps(newProps) {
    if(parseInt(newProps.match.params.chairId) !== this.props.chair.id) {
      this.props.fetchSingleChair().then(
        ({ chair }) => this.renderChair(chair)
      );
    }
  }

  handleClick(e) {
    e.preventDefault();
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
              <a onClick={this.handleClick} href=''>Description</a>
              <a onClick={this.handleClick} href=''>Location</a>
              <a onClick={this.handleClick} href=''>Reviews</a>
            </div>
            <div className='chair-specs'>
              <div className='chair-about'>
                <h3>About this chair</h3>
                <p>Placeholder text, lorem ipsum, etc, etc, etc, la la la, this is not a real sentence, OK.</p>
                <RentalForm />
              </div>
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
