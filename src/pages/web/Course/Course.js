import React, { useState, useEffect } from "react";
import { Course } from "../../../api";
import { Container } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import "./Course.scss";
import { CourseItem } from "../../../components/Web";

const courseController = new Course();

export function CoursePage() {
  const [course, setCourse] = useState(null);
  const { path } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await courseController.getCourse(path);

        setCourse(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [path]);

  return (
    <Container>
      <CourseItem />
    </Container>
  );
}
