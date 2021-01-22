import { MAX_RATING} from "./const";

export function roundUpRating(rating) {
  return Math.round(rating);
}

export function findPercent(digit) {
  return (digit / MAX_RATING) * 100;
}

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

function hightToLowPrice(a, b) {
  return a.price - b.price;
}

function defaultPosition(a, b) {
  return a.id - b.id;
}

function hightToLowRating(a, b) {
  return b.rating - a.rating;
}

function lowToHightPrice(a, b) {
  return b.price - a.price;
}

export const findSortFunction = type => {
  switch (type) {
    case 0:
      return defaultPosition;
    case 1:
      return hightToLowPrice;
    case 2:
      return lowToHightPrice;
    case 3:
      return hightToLowRating;
    default:
      return defaultPosition;
  }
};
