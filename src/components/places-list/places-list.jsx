
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

class PlacesList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      currentOffer: null
    };
  }

  render() {
    const {offer} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offer.map((item, i) => (
          <OfferCard
            key={`${i}`}
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
