import React from 'react';

class ChairShowMap extends React.Component {
  constructor(props) {
    super(props);
    this.renderChair = this.renderChair.bind(this);
  }

  componentDidMount() {
    this.renderChair();
  }

  renderChair() {
    const { chair } = this.props;

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

  render() {
    return(
      <div className='map-container' ref={ map => (this.mapNode = map) }/>
    );
  }
}

export default ChairShowMap;
