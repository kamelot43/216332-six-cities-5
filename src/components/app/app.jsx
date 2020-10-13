import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites/favorites";
import RoomScreen from "../room/room";
import OfferCard from "../offer-card/offer-card";
import PlacesList from "../places-list/places-list";
import Room from "../room/room";

const App = (props) => {

  const {placesCount, offer, comments} = props;
  console.log(offer[0]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <FavoritesScreen offer={offer[0]} onFocus={() => {}}/>
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/offer/:id?">
          <RoomScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );

};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
