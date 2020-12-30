export const ActionType = {
    SET_CITY: `SET_CITY`,
    SET_OFFERS: `SET_OFFERS`,
};

export const ActionCreator = {
  changeCity: (value) => ({
    type: ActionType.SET_CITY,
    payload: value,
  }),
  changeOffers: (offers, value) => {
    let filterArray;
    filterArray = offers.map(a => a.city).flat().filter(item => item.name === value)

    return {
    type: ActionType.SET_OFFERS,
    payload: filterArray,
    };
  },
};