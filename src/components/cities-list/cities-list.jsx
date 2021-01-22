
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { on } from "events";

class citiesList extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {cities, active, onClick, offer, activeFilter} = this.props;

    return (
        <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((item, i) => (
              <li className="locations__item" key={i}>
                <a className={`locations__item-link tabs__item ${active === item ? `tabs__item--active` : null}`} href="#" onClick={() => onClick(offer, item, activeFilter)}>
                 <span>{item}</span>
                </a>
            </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

{/*
FavoriteCard.propTypes = {
  offer: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    costPerNight: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
}; */}

export default citiesList;
