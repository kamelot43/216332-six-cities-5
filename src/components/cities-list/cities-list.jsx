
import React, {PureComponent} from "react";
import {connect} from "react-redux";

class СitiesList extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {cities, activeCity, onClick, offer, activeFilter} = this.props;

    return (
        <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((item, i) => (
              <li className="locations__item" key={i}>
                <a className={`locations__item-link tabs__item ${activeCity === item ? `tabs__item--active` : null}`} href="#" onClick={() => onClick(offer, item, activeFilter)}>
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


const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  activeFilter: state.activeFilter,
});


export {СitiesList};
export default connect(mapStateToProps)(СitiesList);
