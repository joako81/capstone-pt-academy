import React from "react";

import {
  Banner,
  HomeCourses,
  HowMyCoursesWork,
  Reviews,
  CarouselComponent,
} from "../../../components/Web/";

export function Home() {
  return (
    <div className>
      <h1>
        <Banner />
        <HomeCourses />
        <HowMyCoursesWork />
        <Reviews />
        <CarouselComponent />
      </h1>
    </div>
  );
}
