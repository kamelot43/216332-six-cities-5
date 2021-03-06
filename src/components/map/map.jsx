import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";

import {connect} from "react-redux";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
    this.changeMapView = this.changeMapView.bind(this);
  }

  changeMapView() {

    const {offersList, activeOffer} = this.props;
    const location = offersList[0].city.location;
    const {latitude, longitude, zoom} = location;
    const city = [latitude, longitude];

    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this.activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
  
    this.map.setView(city, zoom);

    offersList.map((item) => {
      const icon = item.id === activeOffer ? this.activeIcon : this.icon;
      leaflet.marker([item.location.latitude, item.location.longitude], {icon}).addTo(this.map)
    });
  }

  componentDidMount() {
  
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
  offersList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer,
  offersList: state.offersList,
});


export {Map};
export default connect(mapStateToProps)(Map);
