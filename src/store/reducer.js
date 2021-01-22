import { extend } from "../utils";
import { ActionType } from "./actions";

//глобальное состояние приложения
const initialState = {
  activeCity: "Paris",
  offersList: [],
  activeFilter: 0,
  activeOffer: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return extend(state, {
        activeCity: action.payload
      });

    case ActionType.SET_OFFERS:
      return extend(state, {
        offersList: action.payload
      });

    case ActionType.SET_FILTER:
      return extend(state, {
        activeFilter: action.payload
      });

    case ActionType.SORT_OFFERS:
      return extend(state, {
        offersList: action.payload
      });

    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload
      });
  }

  return state;
};

export { reducer };
