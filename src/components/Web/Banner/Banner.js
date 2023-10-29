import React from "react";
import { Container } from "semantic-ui-react";
import "./Banner.scss";

export function Banner() {
  return (
    <div className="banner">
      <Container>
        <h1>BECOME A CERTIFIED PERSONAL TRAINER </h1>
        <h2>
          Learn with the best professionals in the industry <br /> all the
          knowledge to train your clients.
        </h2>
      </Container>

      <div className="banner-dark" />
    </div>
  );
}
