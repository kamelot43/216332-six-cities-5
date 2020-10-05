import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites/favorites";
import RoomScreen from "../room/room";

const App = (props) => {

  const {placesCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main placesCount={placesCount} />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/offer">
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
