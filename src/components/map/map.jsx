import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";

import PropTypes from "prop-types";

const CITY = [52.38333, 4.9];
const ZOOM = 12;


class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const {offer} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const map = leaflet.map(this.mapContainer.current, {
      center: CITY,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });
    map.setView(CITY, ZOOM);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
  .addTo(map);

    offer.forEach((item) => (
      leaflet.marker(item.coordinates, {icon}).addTo(map)
    ));
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
