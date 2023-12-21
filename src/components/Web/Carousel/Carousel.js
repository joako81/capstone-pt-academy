import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.scss";

export function CarouselComponent() {
  return (
    <div className="carousel_container">
      <div className="carousel_title">
        <h1>Ours Partners</h1>
      </div>
      <div className="carousel_wrapper">
        <Carousel infiniteLoop useKeyboardArrows autoPlay interval={2000}>
          <img
            src="/media_files/images_ours_partners/ymca-logo-w300h200.png"
            alt="logo partner1"
          />

          <img
            src="/media_files/images_ours_partners/davidlogo-w300h200.jpg"
            alt="logo partner1"
          />
          <img
            src="/media_files/images_ours_partners/pt-monthly-magazine-logo-small-w300h200.png"
            alt="logo partner1"
          />

          <img
            src="/media_files/images_ours_partners/mens-helath-w300h200.png"
            alt="logo partner1"
          />
          <img
            src="/media_files/images_ours_partners/download-gg-w300h200.jpg"
            alt="logo partner1"
          />

          <img
            src="/media_files/images_ours_partners/flex-logo-w300h200.png"
            alt="logo partner1"
          />
          <img
            src="/media_files/images_ours_partners/focusawards-w300h200.png"
            alt="logo partner1"
          />
        </Carousel>
      </div>
    </div>
  );
}
