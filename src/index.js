import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offer from "./mocks/offers";
import comments from "./mocks/comments";

const Settings = {
  PLACES_COUNT: 312
};

ReactDOM.render(
    <App
      placesCount={Settings.PLACES_COUNT}
      offer={offer}
      comments={comments}
    />,
    document.querySelector(`#root`)
);
