
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {roundUpRating, findPercent} from "../../utils";

class OfferCard extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {onFocus, offer} = this.props;

    return (

      <article
        className="cities__place-card place-card"
        id={offer.index}
        onMouseEnter={(evt) => {
          evt.preventDefault();
          onFocus(offer.index);
        }}
      >

        {offer.premium === true &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }

        <div className="cities__image-wrapper place-card__image-wrapper">
          <Link className="navbar-item" to="/offer/:id?">
            <img className="place-card__image" src={offer.picture} width="260" height="200" alt="Place image"/>
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro; {offer.costPerNight}</b>
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
  offer: PropTypes.shape({
    rating: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    costPerNight: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default OfferCard;
