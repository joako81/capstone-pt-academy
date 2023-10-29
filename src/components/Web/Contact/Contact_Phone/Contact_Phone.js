import React from "react";
import "./Contact_Phone.scss";
import { Container, Icon } from "semantic-ui-react";

export function Contact_Phone() {
  return (
    <div className="contact-phone">
      <Container>
        <h1>CONTACT US WE DON'T BITE</h1>
        <p>
          <strong>
            Call us on <a href="tel:01213660292"> 0121 366 0292</a> or write a
            WhattsApp
            <a
              href="https://wa.me/665344363?text=Hello!"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              +34 665 344 363
            </a>
          </strong>{" "}
          or better yet, see us in person! We love our customers, so feel free
          to visit during normal business hours.
          <br />
          <br />
          <strong>PT ACADEMY HEAD OFFICE</strong>
          <br />
          <br />
          <div className="style-direction">
            92 Broad Street, Birmingham, West Midlands, England B15 1AU, United
            Kingdom
            <div style={{ marginLeft: "10px" }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=92 Broad Street, Birmingham, West Midlands, England B15 1AU, United Kingdom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="icon" name="map" />
              </a>
            </div>
          </div>
          <br />
          <br />
          <strong>Hours Open:</strong>
          <br />
          <br />
          Monday-Friday 09:00 – 19:30 Saturday 10:00 – 17:00
        </p>
      </Container>
      <div className="contact-phone-dark"></div>
    </div>
  );
}
