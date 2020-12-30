import React from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list";
import CitiesList from "../cities-list/cities-list";
import {Cities} from "../../const";
import Map from "../map/map";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/actions";

const Type = {
  CITY: `city`,
  NEAR: `near`,
  FAVORITE: `favorite`
};

const Main = (props) => {
  // задачи, которые необходимо реализовать в рамках текущей задачи
  // фильтрация массива с предложениями по выбранному городу
  // отрисовка выборки
  // понять каким должно быть поведение при первой загрузке: откуда берем список отелей, как его фильтруем и отрисовываем ?
  // какое дальнейшее взаимодействие при клике на город ?
  // коммит в демке 5.7
 const {placesCount, offer, city, changeCity, offersList} = props;
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
          active={city}
          onClick={changeCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
                {/*
                <select className="places__sorting-type" id="places-sorting">
                  <option className="places__option" value="popular" selected="">Popular</option>
                  <option className="places__option" value="to-high">Price: low to high</option>
                  <option className="places__option" value="to-low">Price: high to low</option>
                  <option className="places__option" value="top-rated">Top rated first</option>
                </select>
                */}
              </form>

              <PlacesList
                type={Type.CITY}
                offer={offer}
                onFocus={() => {}}
              />
            </section>

            <div className="cities__right-section">
              {/* 
              <Map
                offer={offer}
              />
              */}
            </div>
          </div>
        </div>
      </main>
      <div>
      </div>
    </div>
  );
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
  city: state.city,
  offersList: state.offersList,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(offer ,value) {
    dispatch(ActionCreator.changeCity(value));
    dispatch(ActionCreator.changeOffers(offer, value));
  },
 
});


export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
