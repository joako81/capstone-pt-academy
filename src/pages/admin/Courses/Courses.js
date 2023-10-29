import React, { useState, useEffect } from "react";
import { Tab, Button } from "semantic-ui-react";
import { BasicModal } from "../../../components/Shared";
import { ListCourses, CourseForm } from "../../../components/Admin/Course";
import "./Courses.scss";

export function Courses() {
  const [showModal, setShowModal] = useState(false);
  const [shouldReload, setShouldReload] = useState(false);

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const onReload = () => setShouldReload(true);

  useEffect(() => {
    if (shouldReload) {
      setShouldReload(false);
    }
  }, [shouldReload]);

  const panes = [
    {
      render: () => (
        <Tab.Pane attached={false}>
          <ListCourses reload={shouldReload} onReload={onReload} />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <>
      <div className="courses-page">
        <div className="courses-page-add">
          <Button color="black" onClick={onOpenCloseModal}>
            New course
          </Button>
        </div>

        <Tab menu={{ secondary: true }} panes={panes} />
      </div>

      <BasicModal
        show={showModal}
        close={onOpenCloseModal}
        title="Create course"
      >
        <CourseForm onClose={onOpenCloseModal} onReload={onReload} />
      </BasicModal>
    </>
  );
}
