import {extend} from "../utils";
import {ActionType} from "./actions";

const initialState = {
  city: 'Paris',
  offersList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ActionType.SET_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.SET_OFFERS:
      return extend(state, {
        offersList: action.payload,
      });
  }

  return state;
};


export {reducer};