
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/actions";

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

  }

  render() {
    const {offersList, type, changeActiveOffer} = this.props;
   
    return (
      <>
      <div className={`${getComponentByType(type)} places__list`}>
        {offersList.map((item, i) => (
          <OfferCard
            key={`${i}`}
            type={type}
            offer={item}
            onFocus={changeActiveOffer}
            onBlur={changeActiveOffer}
          />
        ))}
      </div>
      </>
    );
  }
}


PlacesList.propTypes = {
  type: PropTypes.string.isRequired,
  changeActiveOffer: PropTypes.func.isRequired,
  offersList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer,
  offersList: state.offersList,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveOffer(value) {
    dispatch(ActionCreator.changeActiveOffer(value));
  },
});


export {PlacesList};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
