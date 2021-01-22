import {findSortFunction} from "../utils";

export const ActionType = {
    SET_CITY: `SET_CITY`,
    SET_FILTER: `SET_FILTER`,
    SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
    SET_OFFERS: `SET_OFFERS`,
    SORT_OFFERS: `SORT_OFFERS`
};

export const ActionCreator = {
  changeCity: (value) => ({
    type: ActionType.SET_CITY,
    payload: value,
  }),
  changeOffers: (offers, value) => {
    let filterArray;
    filterArray = offers.filter(item => item.city.name === value)

    return {
    type: ActionType.SET_OFFERS,
    payload: filterArray,
    };
  },
  changeFilter: (value) => ({
    type: ActionType.SET_FILTER,
    payload: value,
  }),
  changeActiveOffer: (value) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: value,
  }),
  setFilter: (value) => ({
    type: ActionType.SET_FILTER,
    payload: value,
  }),
  sortOffers: (offers, id) => {

    let sortArray = offers.slice();
    const sortFunction = findSortFunction(id);
    sortArray.sort(sortFunction);
  
    return {
    type: ActionType.SORT_OFFERS,
    payload: sortArray,
    };
  },
};