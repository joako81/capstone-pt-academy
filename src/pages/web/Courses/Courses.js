import React, { useState, useEffect } from "react";
import { Container, Image, Button } from "semantic-ui-react";
import { map } from "lodash";
import { image } from "../../../assets";
import { Course } from "../../../api";

import { Course as CourseComponent } from "../../../components/Web/Courses";

import "./Courses.scss";

const courseController = new Course();

export function Courses() {
  const [courses, setCourses] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const isCurrentLastPage = pagination?.page === pagination?.pages;

  useEffect(() => {
    (async () => {
      try {
        const response = await courseController.getCourses({ page, limit: 6 });
        setPagination({
          page: response.page,
          pages: response.pages,
        });

        setCourses((prevCourses) => [...prevCourses, ...response.docs]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page]);

  const loadMore = () => {
    if (!isCurrentLastPage) {
      setPage((prevState) => prevState + 1);
    }
  };

  return (
    <Container className="courses-page">
      <Image src={image.academyLogo} />
      <h2>
        <h1>PERSONAL TRAINING QUALIFICATIONS & DIPLOMAS</h1>
        <p>
          <br /> Our diplomas are the best in the industry. Not only are they
          the most competitively priced in the UK but also the best value for
          money. Our diplomas will consist of the mandatory certificates and
          bespoke CPD courses. The CPD courses are tried and tested and are
          exactly what you need to make sure you are entering the industry with
          the right skills. All the qualifications we offer and deliver are
          OFQUAL regulated and in turn recognised by EREPS, Cimspa and the
          Fitness Register. Our comprehensive continuous professional
          development (CPD) courses are recognised by every gym and health club
          operator. We are approved to deliver fitness qualifications on behalf
          of NCFE and YMCA Awards. NCFE is the UK’s oldest established awarding
          organisation tracking over 160 years. YMCA Awards (formerly CYQ) is
          probably the most established fitness awarding organisation spanning
          25 years. Choose from over 200 towns and cities to study in. Learners
          have the choice of doing the assessments 1 to 1 with a mentor at the
          mentors venue or at our designated assessment days which are held
          nationwide.
        </p>
      </h2>
      <div className="courses">
        {map(courses, (course) => (
          <div key={course._id} className="courses-item">
            <CourseComponent course={course} />
          </div>
        ))}
      </div>

      {!isCurrentLastPage && (
        <div className="more">
          <Button primary onClick={loadMore}>
            Cargar más...
          </Button>
        </div>
      )}
    </Container>
  );
}
