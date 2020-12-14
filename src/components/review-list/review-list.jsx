
import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review";

const ReviewList = (props) => {

const {comments} = props;

    return (
      <section className="reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
        <ul className="reviews__list">
          {comments.map((item, i) => (
            <Review
              key={`${i}`}
              comment={item}
            />
          ))}
        </ul>
      </section>
    );
}

ReviewList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    datetime: PropTypes.string.isRequired,
    formatDateTime: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};


export default ReviewList;
