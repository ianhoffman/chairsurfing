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
      scrollwheel: false,
      minZoom: 12
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    var latLng = { lat: parseFloat(chair.lat), lng: parseFloat(chair.lng) };

    this.geocoder = new google.maps.Geocoder;
    this.geocoder.geocode({location: latLng}, function(results, status) {
      if(status==='OK') {
        if(results[0]) {

          let infoWindow = new google.maps.InfoWindow({
            content: results[0].formatted_address
          });
          let marker = new google.maps.Marker({
            position: latLng,
            map: this.map,
            infoWindow: infoWindow
          });

          marker.infoWindow.open(this.map, marker);
          
        } else {
          this.props.chair.address = "Couldn't find address.";
        }
      } else {
        this.props.chair.address = `Geocoder failed due to: ${status}`;
      }
    }.bind(this));
  }

  render() {
    return(
      <div className='show-map-container' ref={ map => (this.mapNode = map) }/>
    );
  }
}

export default ChairShowMap;
