import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites/favorites";
import Room from "../room/room";

//задача валидация пропсов во всех компонентах приложения

const App = (props) => {

  const {placesCount, offer, comments} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main placesCount={placesCount} offer={offer} comments={comments}/>
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/favorite">
          <FavoritesScreen offer={offer[0]} />
        </Route>
        <Route exact path="/offer/:id?">
        <Route
              exact
              path="/offer/:id?"
              render={({ match }) => (
                <Room id={match.params.id} offers={offer} comments={comments}></Room>
              )}
            >
            </Route>
        </Route>
      </Switch>
    </BrowserRouter>
  );

};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offer: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
};

export default App;
