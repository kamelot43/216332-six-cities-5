
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class OfferCard extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {onFocus, offers} = this.props;

    return (

      {offers.map((offer, i) => (

        <article className="cities__place-card place-card" key={`${i} + 1`}>

        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={offer.picture} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.costPerNight}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlink:href="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `80%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{offer.title}</a>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
        </article>

            ))}
    )
  }
}

OfferCard.propTypes = {
  onFocus: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    city: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    costPerNight: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
  }).isRequired,
};

export default OfferCard;
