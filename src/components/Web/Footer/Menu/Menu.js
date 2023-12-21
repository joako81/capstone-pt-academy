import React from "react";
import { Grid, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Menu.scss";

export function Menu() {
  return (
    <div className="footer-menu">
      <h4>Navigation</h4>

      <Grid columns={2} className="centered">
        <Grid.Column>
          <Link to="/">
            <Icon name="home" /> Home
          </Link>
          <Link to="/about">
            <Icon name="users" /> About us
          </Link>

          <Link to="/courses">
            <Icon name="book" /> Online courses
          </Link>
          <Link to="/blog">
            <Icon name="blogger b" /> Blog
          </Link>
        </Grid.Column>

        <Grid.Column>
          <p>Contact with us:</p>
          <Link to="/contact">
            <Icon name="mail" /> Write us to our e-mail
          </Link>
          <Link to="tel:+34665344363">
            <Icon name="phone volume" /> Call us!
          </Link>
          <Link to="https://api.whatsapp.com/send/?phone=665344363&text=Hello%21&type=phone_number&app_absent=0">
            <Icon name="whatsapp" /> Contact by whatsapp
          </Link>
        </Grid.Column>
      </Grid>
    </div>
  );
}
