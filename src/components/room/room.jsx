import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import FormComment from "../form-comment/form-comment";
import ReviewList from "../review-list/review-list";
import PlacesList from "../places-list/places-list";
import Map from "../map/map";
import {Link} from "react-router-dom";
import {findPercent} from "../../utils";
const MAX_OFFERS = 3;

const Type = {
  CITY: `city`,
  NEAR: `near`,
  FAVORITE: `favorite`
};

class Room extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {offers, comments, id} = this.props;
    const offer = offers[id -1];
    const {images, goods, description, host} = offer;

    const filterArray = offers.filter((item, i) => (
      i < MAX_OFFERS
    ));

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="navbar-item" to="/">
                  <img className="header__logo-link" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">

          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">

                {images.map((picture, i) => (

                  <div className="property__image-wrapper" key={i}>
                    <img className="property__image" src={picture} alt="" />
                  </div>
                ))}

              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">

                {offer.is_premium === true &&
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                }

                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${findPercent(offer.rating)}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.max_adults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((feature, i) => (
                      <li className="property__inside-item" key={`${i} + ${feature[i]}`}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={host.avatar_url} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                  </div>
                  <div className="property__description">
                      <p className="property__text" >
                        {description}
                      </p>
                  </div>
                </div>
                <section className="property__reviews">
                <ReviewList
                    comments={comments}
                  />
                <FormComment/>
                </section>
              </div>
            </div>
            <section className="property__map map">
              {/*
              <Map
                offer={filterArray}
              />
              */}
            </section>
          </section>

          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <PlacesList
                offer={filterArray}
                type={Type.NEAR}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Room.propTypes = {
  offer: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    costPerNight: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    pictures: PropTypes.array.isRequired,
    premium: PropTypes.bool.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    features: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    datetime: PropTypes.string.isRequired,
    formatDateTime: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default Room;
