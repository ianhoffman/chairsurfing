import React from 'react';
import ChairMap from './chair_map';

class ChairShow extends React.Component {
  componentDidMount() {
    this.props.fetchSingleChair().then(
      ({ chair }) => this.renderChair(chair)
    );
  }

  renderChair(chair) {
    const mapOptions = {
      center: {
        lat: chair.lat,
        lng: chair.lng
      },
      zoom: 13,
      gestureHandling: 'none',
      scrollwheel: false
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    var latLng = { lat: chair.lat, lng: chair.lng };
    new google.maps.Marker({
      position: latLng,
      map: this.map
    });
  }

  componentWillReceiveProps(newProps) {
    if(parseInt(newProps.match.params.chairId) !== this.props.chair.id) {
      this.props.fetchSingleChair().then(
        ({ chair }) => this.renderChair(chair)
      );
    }
  }

  render() {
    return(
      <div className='chair-show'>
        <div className='chair-container'>
          <h1>{this.props.chair.description}</h1>
          <img src={this.props.chair.imageUrl}/>
        </div>
        <div
          className='map-container'
          ref={ map => (this.mapNode = map) } />
      </div>
    );
  }

}

export default ChairShow;
