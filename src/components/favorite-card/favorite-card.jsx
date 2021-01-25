
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
class FavoriteCard extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {offer} = this.props;

    return (

      <article className="favorites__card place-card">
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <Link className="navbar-item" to="/offer/:id?">
            <img className="place-card__image" src={offer.picture} width="150" height="110" alt="Place image"/>
          </Link>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.costPerNight}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `100%`}}></span>
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


export default FavoriteCard;
