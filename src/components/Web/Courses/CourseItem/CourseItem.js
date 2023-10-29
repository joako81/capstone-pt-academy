import React, { useState, useEffect } from "react";
import { Container, Loader, Image, Button } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { Course } from "../../../../api";
import { Link } from "react-router-dom";
import { ENV } from "../../../../utils";
import Stars from "react-stars";
import "./CourseItem.scss";

const courseController = new Course();

export function CourseItem() {
  const [course, setCourse] = useState(null);
  const { path } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await courseController.getCourse(path);
        /*   console.log("response", response); */
        setCourse(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [path]);

  if (!course) return <Loader active inline="centered" />;

  return (
    <Container className="course-item-web">
      <h1 className="course-item-web-title">{course.title}</h1>

      <div className="course-item-web-left">
        <div className="course-item-web-body">
          <div className="course-item-web-image">
            <Image src={`${ENV.BASE_PATH}/${course.miniature}`} />
          </div>

          <div
            className="course-item-web-content"
            dangerouslySetInnerHTML={{ __html: course?.description }}
          />
        </div>

        <div className="course-item-web-right">
          <div className="course-item-web-right-options">
            <div className="course-item-web-right-options-price">
              <span className="price">{`${course.price}€`}</span>
              <Stars
                count={5}
                value={course.score}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              <span className="score">{`Puntuación curso: ${course.score}`}</span>
            </div>
          </div>
          <Button primary content="Call us" as={Link} to={"/contact"} />
        </div>
      </div>
    </Container>
  );
}
