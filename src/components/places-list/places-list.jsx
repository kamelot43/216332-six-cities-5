
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

const Type = {
  CITY: `city`,
  NEAR: `near`,
  FAVORITE: `favorite`
};

const getComponentByType = (type) => {
  switch (type) {
    case Type.CITY:
      return `cities__places-list tabs__content`;
    case Type.NEAR:
      return `near-places__list`;
  }
};

class PlacesList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      currentOffer: null
    };
  }

  render() {
    const {offer, type} = this.props;

    return (
      <div className={`${getComponentByType(type)} places__list`}>
        {offer.map((item, i) => (
          <OfferCard
            key={`${i}`}
            type={type}
            offer={item}
            onFocus={(target) => {
              this.setState(() => ({
                currentOffer: target,
              }));
            }}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offer: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    costPerNight: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
};


export default PlacesList;
