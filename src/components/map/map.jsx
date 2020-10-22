import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import leaflet.css;
import PropTypes from "prop-types";

const city = [52.38333, 4.9];
const zoom = 12;
const offerCords = [52.3709553943508, 4.89309666406198];

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const map = leaflet.map(this.mapContainer.current, {
      center: city,
      zoom: zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  })
  .addTo(map);

  leaflet.marker(offerCords, {icon}).addTo(map);

  }

  render() {
    return (
        <section className="test">
          <div ref={this.mapContainer} style={{height: `100%`}}></div>
        </section>
    )
  }
}

export default Map;
