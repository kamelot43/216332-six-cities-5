import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";

import PropTypes from "prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
    this.changeMapView = this.changeMapView.bind(this);
  }

  changeMapView() {

    const {offer} = this.props;
    const location = offer[0].city.location;
    const {latitude, longitude, zoom} = location;
    const city = [latitude, longitude];
  
    this.map.setView(city, zoom);

    offer.map((item) => {
      leaflet.marker([item.location.latitude, item.location.longitude], {icon: this.icon}).addTo(this.map)
    });
  }

  componentDidMount() {
  
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this.map = leaflet.map(this.mapContainer.current, {
      zoomControl: false,
      marker: true
    });

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
  .addTo(this.map);

  this.changeMapView();
  }

  componentDidUpdate() {
    this.changeMapView();
  }

  render() {
  
    return (

      <section className="cities__map map" style={{height: `100%`}}>
        <div ref={this.mapContainer} style={{height: `100%`}}></div>
      </section>
    );
  }
}

Map.propTypes = {
  offer: PropTypes.arrayOf(PropTypes.shape({
    coordinates: PropTypes.array.isRequired,
  })).isRequired,
};

export default Map;
