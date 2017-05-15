export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};

    this.createMarkersFromBench = this.createMarkersFromBench.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
  }

  updateMarkers(benches, history) {
    Object.keys(this.markers).forEach(key => {
      if(!(benches[key])) {
        this.removeMarker(key);
      }
    });

    Object.keys(benches).forEach(key => {
      if(!(this.markers[key])) {
        this.createMarkersFromBench(benches[key], history);
      }
    });
  }

  removeMarker(key) {
    this.markers[key].setMap(null);
    delete this.markers[key];
  }

  createMarkersFromBench(bench, history) {
    var latLng = { lat: bench.lat, lng: bench.lng };
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map
    });
    marker.addListener('click', () => {
      history.push(`/benches/${bench.id}`);
    });
    this.markers[bench.id] = marker;
  }
}
