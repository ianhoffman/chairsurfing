export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.infoWindows = [];

    this.createMarkersFromChair = this.createMarkersFromChair.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
  }

  updateMarkers(chairs, history) {
    Object.keys(this.markers).forEach(key => {
      if(!(chairs[key])) {
        this.removeMarker(key);
      }
    });

    Object.keys(chairs).forEach(key => {
      if(!(this.markers[key])) {
        this.createMarkersFromChair(chairs[key], history);
      }
    });
  }

  removeMarker(key) {
    this.markers[key].setMap(null);
    delete this.markers[key];
  }

  createMarkersFromChair(chair, history) {
    var latLng = { lat: chair.lat, lng: chair.lng };

    var infowindow = new google.maps.InfoWindow({
      content: `<p>Description: ${chair.description}</p>`
    });
    this.infoWindows.push(infowindow);

    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
    });
    this.markers[chair.id] = marker;

    marker.addListener('click', () => {

      for(let i = 0; i < this.infoWindows.length; i++) {
        this.infoWindows[i].close();
      }

      infowindow.open(this.map, marker);
    });
  }

}
