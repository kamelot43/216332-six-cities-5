
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

class PlacesList extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {onFocus, offer} = this.props;

    return (
        <div className="cities__places-list places__list tabs__content">
        {offer.map((item, i) => (
            <OfferCard
              key={`${i}`}
              offer={item}
              onFocus={() => {}}
            />
          ))}
        </div>
    )
  };
}

PlacesList.propTypes = {
  onFocus: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    costPerNight: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};


export default PlacesList;
