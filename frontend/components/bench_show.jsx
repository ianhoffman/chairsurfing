import React from 'react';
import BenchMap from './bench_map';

class BenchShow extends React.Component {
  componentDidMount() {
    if(!(this.props.bench)) {
      this.props.fetchSingleBench();
    } else {
      this.generateMap(this.props.bench).bind(this);
    }
  }

  generateMap(bench) {
    const mapOptions = {
      center: {
        lat: bench.lat,
        lng: bench.lng
      },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    var latLng = { lat: bench.lat, lng: bench.lng };
    new google.maps.Marker({
      position: latLng,
      map: this.map
    });
  }

  componentWillReceiveProps(newProps) {
    if(newProps.bench) {
      this.generateMap(newProps.bench).bind(this);
    }
  }

  render() {
    return(
      <div id='map-container' ref={ map => (this.mapNode = map) } />
    );
  }

}

export default BenchShow;
