import React from "react";
import { Image, Button } from "semantic-ui-react";
import Stars from "react-stars";

import { ENV } from "../../../../utils";

import "./Course.scss";

export function Course(props) {
  const { course } = props;

  return (
    <div className="course">
      <Image
        className="course-image"
        src={`${ENV.BASE_PATH}/${course.miniature}`}
      />
      <div className="course-info">
        <h3>{course.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: course?.description }} />
        <Button
          as="a"
          href={`course/${course.url}`}
          primary
          fluid
          target="_blank"
          rel="noopener noreferrer"
        >
          Más información sobre el curso
        </Button>

        <div className="course-info-footer">
          <span>{course.status}</span>
          <Stars
            count={5}
            value={course.score}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
        </div>
      </div>
    </div>
  );
}
