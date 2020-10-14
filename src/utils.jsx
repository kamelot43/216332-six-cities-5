import {MAX_RATING} from "./const";

export function roundUpRating(rating) {
  return Math.round(rating);
}

export function findPercent(digit) {
  return (((digit / MAX_RATING) * 100));
}
