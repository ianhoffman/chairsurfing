import React from 'react';
import MarkerManager from '../util/marker_manager';
import { withRouter } from 'react-router-dom';

class BenchMap extends React.Component {
  componentDidMount() {
    const { benches } = this.props;

    const mapOptions = {
      center: {
        lat: 37.7758,
        lng: -122.435
      },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.map.addListener('idle', function() {
      let latLngBounds = this.map.getBounds();
      let northEast = latLngBounds.getNorthEast();
      let southWest = latLngBounds.getSouthWest();

      let bounds = {
        'northEast': {
          'lat': northEast.lat(),
          'lng': northEast.lng()
        },
        'southWest': {
          'lat': southWest.lat(),
          'lng': southWest.lng()
        }
      };

      this.props.updateBounds('bounds', bounds);
    }.bind(this));

    this.map.addListener('click', coords => {
      this.props.history.push({
        pathname: "benches/new",
        search: `lat=${coords.latLng.lat()}&lng=${coords.latLng.lng()}`
      });
    });

    this.MarkerManager = new MarkerManager(this.map);
  }

  componentWillReceiveProps(newProps) {
    const { benches } = newProps;
    this.MarkerManager.updateMarkers(benches);
  }

  render() {
    return(
      <div id='map-container' ref={ map => (this.mapNode = map) } />
    );
  }
}

export default withRouter(BenchMap);
