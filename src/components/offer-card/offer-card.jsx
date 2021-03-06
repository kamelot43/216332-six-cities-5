
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {roundUpRating, findPercent} from "../../utils";

const Type = {
  CITY: `city`,
  NEAR: `near`,
  FAVORITE: `favorite`
};

const getComponentByType = (type) => {
  switch (type) {
    case Type.CITY:
      return `cities__place-card`;
    case Type.NEAR:
      return `near-places__card`;
    case Type.FAVORITE:
      return `favorites__card`;
  }
};

class OfferCard extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {onFocus, onBlur, offer, type} = this.props;

    return (

      <article
        className={`${getComponentByType(type)} place-card`}
        id={offer.id}
        onMouseEnter={(evt) => {
          evt.preventDefault();
          onFocus(offer.id);
        }}
        onMouseLeave={(evt) => {
          evt.preventDefault();
          onBlur(null);
        }}
      >

        {offer.is_premium === true &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }

        <div className={`${getComponentByType(type)}__image-wrapper place-card__image-wrapper`}>
          <Link className="navbar-item" to={`/offer/${offer.id}`}>
            <img className="place-card__image" src={offer.preview_image} width="260" height="200" alt="Place image"/>
          </Link>
        </div>
        <div className={`${type === `favorite` ? favorites__card-info : null} place-card__info`}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro; {offer.price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${findPercent(roundUpRating(offer.rating))}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{offer.title}</a>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    );
  }
}

OfferCard.propTypes = {
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default OfferCard;
