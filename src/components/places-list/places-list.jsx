
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

class PlacesList extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {onFocus, offers} = this.props;

    return (

      {offers.map((offer, i) => (

        <OfferCard
          offers={offer}
          onFocus={() => {}}
        />

        ))}
    )
  }
}

PlacesList.propTypes = {
  onFocus: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    city: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    costPerNight: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
  }).isRequired,
};

export default PlacesList;
