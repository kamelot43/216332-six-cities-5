import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list";
import CitiesList from "../cities-list/cities-list";
import PlacesSorting from "../places-sorting/places-sorting";
import {Cities} from "../../const";
import Map from "../map/map";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/actions";

const Type = {
  CITY: `city`,
  NEAR: `near`,
  FAVORITE: `favorite`
};

class Main extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offer, activeCity, changeCity} = this.props;
    changeCity(offer, activeCity);
  }

  render() {
    const {offer, activeCity, changeCity,  sortOffers, offersList, activeFilter} = this.props;
    const arrayCities = Object.values(Cities);
  
    return (
      <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          offer={offer}
          cities={arrayCities}
          onClick={changeCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersList.length} places to stay in {activeCity}</b>

              <PlacesSorting
                onClick={sortOffers}
              />

              <PlacesList
                type={Type.CITY}
                onFocus={() => {}}
              />
            </section>

            <div className="cities__right-section">
              {offersList.length > 0 ?
              <Map/> 
              : null }
            </div>
          </div>
        </div>
      </main>
      <div>
      </div>
    </div>
    )
  }
};

Main.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offer: PropTypes.arrayOf(PropTypes.shape({
    premium: PropTypes.bool.isRequired,
    picture: PropTypes.string.isRequired,
    costPerNight: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offersList: state.offersList,
  activeFilter: state.activeFilter,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(offer, value) {
    dispatch(ActionCreator.changeCity(value));
    dispatch(ActionCreator.changeOffers(offer, value));
    dispatch(ActionCreator.setFilter(0));
  },
  changeOffers(offer ,value) {
    dispatch(ActionCreator.changeOffers(offer, value));
  },
  sortOffers(offer, id) {
    dispatch(ActionCreator.setFilter(id));
    dispatch(ActionCreator.sortOffers(offer, id));
  },
  
});


export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
