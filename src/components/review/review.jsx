
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {findPercent} from "../../utils";

class Review extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {comment} = this.props;

    return (

      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={comment.avatar} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            {comment.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `${findPercent(comment.rating)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {comment.text}
          </p>
          <time className="reviews__time" dateTime={comment.datetime}>{comment.formatDateTime}</time>
        </div>
      </li>
    );
  }
}

Review.propTypes = {
  comment: PropTypes.shape({
    type: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    datetime: PropTypes.string.isRequired,
    formatDateTime: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
