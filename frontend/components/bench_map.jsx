import React from 'react';
import MarkerManager from '../util/marker_manager';

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
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(benches);
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

export default BenchMap;
