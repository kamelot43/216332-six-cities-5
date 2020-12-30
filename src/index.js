import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";
import App from "./components/app/app";
import offer from "./mocks/offers";
import comments from "./mocks/comments";

const Settings = {
  PLACES_COUNT: 312
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
<Provider store={store}>
  <App
      placesCount={Settings.PLACES_COUNT}
      offer={offer}
      comments={comments}
  />
</Provider>,
    document.querySelector(`#root`)
);
