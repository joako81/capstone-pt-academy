import React from "react";

import {
  Banner,
  HomeCourses,
  HowMyCoursesWork,
  Reviews,
} from "../../../components/Web/";

export function Home() {
  return (
    <div className>
      <h1>
        <Banner />
        <HomeCourses />
        <HowMyCoursesWork />
        <Reviews />
      </h1>
    </div>
  );
}
