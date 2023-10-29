import React from "react";
import { Container, Image } from "semantic-ui-react";
import { map } from "lodash";
import { reviewsData } from "./Reviews.data";

import "./Reviews.scss";

export function Reviews() {
  return (
    <Container className="reviews">
      <h2>Become one of more than 10,000 well-trained specialists</h2>

      <div className="reviews-list">
        {map(reviewsData, (review, index) => (
          <div key={index}>
            <p>{review.comment}</p>
            <div className="reviews-list-user">
              <Image src={review.avatar} avatar />
              <div>
                <span>{review.userName}</span>
                <span>{review.userType}</span>
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
