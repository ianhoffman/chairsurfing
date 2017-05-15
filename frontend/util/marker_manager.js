export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.createMarkersFromBench = this.createMarkersFromBench.bind(this);
  }

  updateMarkers(benches) {
    console.log('time to update');

    Object.keys(benches).forEach(key => {
      if(!(this.markers[key])) {
        this.createMarkersFromBench(benches[key]);
      }
    });
  }

  createMarkersFromBench(bench) {
    var latLng = { lat: bench.lat, lng: bench.lng };
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map
    });
  }
}
