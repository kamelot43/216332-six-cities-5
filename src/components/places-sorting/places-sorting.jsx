import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const OPTIONS = [
  "Popular",
  "Price: low to high",
  "Price: high to low",
  "Top rated firs"
];

//задача взять переменную offer из глобального state, а не передавать как пропс

class PlacesSorting extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      values: OPTIONS,
      showMenu: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    const { values, showMenu } = this.state;
    const {onClick, offersList, activeFilter} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by &nbsp;</span>

        <span
          className="places__sorting-type"
          tabIndex="0"
          onMouseEnter={this.toggleMenu}
         
        >
          {values[activeFilter]}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>

        <ul
          className={`places__options places__options--custom ${
            showMenu === true ? `places__options--opened` : null
          }`}
          onMouseLeave={this.toggleMenu}
        >
          {OPTIONS.map((item, i) => (
            <li
              key={i}
              className={`places__option ${activeFilter === i ? `places__option--active` : null}`}
              tabIndex="0"
              id={i}
              onClick={() => { 
                onClick(offersList , i)
              }}
            >
              {item}
            </li>
          ))}
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
    );
  }
}

const mapStateToProps = (state) => ({
  offersList: state.offersList,
  activeFilter: state.activeFilter,
});

export {PlacesSorting};
export default connect(mapStateToProps)(PlacesSorting);
