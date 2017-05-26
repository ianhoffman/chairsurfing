import React from 'react';

class ChairShowMap extends React.Component {
  constructor(props) {
    super(props);
    this.renderChair = this.renderChair.bind(this);
  }

  componentDidMount() {
    this.renderChair(this.props.chair);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.chair.id !== this.props.chair.id) {
      this.renderChair(newProps.chair);
    }
  }

  renderChair(chair) {
    const mapOptions = {
      center: {
        lat: chair.lat,
        lng: chair.lng
      },
      zoom: 13,
      gestureHandling: 'none',
      scrollwheel: false,
      minZoom: 12
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    var latLng = { lat: parseFloat(chair.lat), lng: parseFloat(chair.lng) };

    let infoWindow = new google.maps.InfoWindow({
      content: chair.address
    });

    let marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
    });

    infoWindow.open(this.map, marker);
  }

  render() {
    return(
      <div className='show-map-container' ref={ map => (this.mapNode = map) }/>
    );
  }
}

export default ChairShowMap;
