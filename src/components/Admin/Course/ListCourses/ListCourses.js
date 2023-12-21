import React, { useState, useEffect } from "react";
import { Loader, Pagination } from "semantic-ui-react";
import { size, map } from "lodash";

import { Course } from "../../../../api";
import { CourseItem } from "../CourseItem";
import "./ListCourses.scss";

const courseController = new Course();

export function ListCourses(props) {
  const { reload, onReload } = props;
  const [courses, setCourses] = useState(false);

  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await courseController.getCourses({ page, limit: 10 }); //cambiar límite cursos por página si quiero ponerlo pongo , limit : número
        if (response) {
          setCourses(response.docs);
          setPagination({
            limit: response.limit,
            page: response.page,
            pages: response.pages,
            total: response.total,
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page, reload]);

  const changePage = (_, data) => {
    if (size(courses) === 0 && data.activePage > 1) {
      // cONDICIÓN Si no hay cursos en la página actual y no es la primera página,
      // volvemos a la página anterior
      setPage(data.activePage - 1);
    } else {
      setPage(data.activePage);
    }
  };

  if (!courses) return <Loader active inline="centered" />;
  if (size(courses) === 0) return "No hay ningún curso";

  return (
    <div className="list-courses">
      {map(courses, (course) => (
        <CourseItem key={course._id} course={course} onReload={onReload} />
      ))}

      <div className="list-courses-pagination">
        <Pagination
          totalPages={pagination.pages}
          defaultActivePage={pagination.pages}
          ellipsisItems={null}
          firstItem={null}
          lastItem={null}
          onPageChange={changePage}
        />
      </div>
    </div>
  );
}
