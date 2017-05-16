import React from 'react';
import BenchMap from './bench_map';

class BenchShow extends React.Component {
  componentDidMount() {
    this.props.fetchSingleBench().then(
      ({ bench }) => this.renderBench(bench)
    );
  }

  renderBench(bench) {
    const mapOptions = {
      center: {
        lat: bench.lat,
        lng: bench.lng
      },
      zoom: 13,
      gestureHandling: 'none'
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    var latLng = { lat: bench.lat, lng: bench.lng };
    new google.maps.Marker({
      position: latLng,
      map: this.map
    });
  }

  componentWillReceiveProps(newProps) {
    if(parseInt(newProps.match.params.benchId) !== this.props.bench.id) {
      this.props.fetchSingleBench().then(
        ({ bench }) => this.renderBench(bench)
      );
    }
  }

  render() {
    return(
      <div>
        <div className='map-container' ref={ map => (this.mapNode = map) } />
        <div>Description: {this.props.bench.description}</div>
        <div>Seating: {this.props.bench.seating}</div>
        <div>Latitude: {this.props.bench.lat}</div>
        <div>Longitude: {this.props.bench.lng}</div>
      </div>
    );
  }

}

export default BenchShow;
