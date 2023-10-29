import React, { useState } from "react";
import { Tab, Button } from "semantic-ui-react";
import { ListPost } from "../../../components/Admin/Post/";
import { BasicModal } from "../../../components/Shared";
import { PostForm } from "../../../components/Admin/Post/PostForm";
import "./Blog.scss";

export function Blog() {
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const onReload = () => setReload((prevState) => !prevState);

  const panes = [
    {
      render: () => (
        <Tab.Pane attached={false}>
          <ListPost reload={reload} onReload={onReload} />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <>
      <div className="blog-page">
        <div className="blog-page-add">
          <Button secondary onClick={onOpenCloseModal}>
            New Post
          </Button>
        </div>

        <Tab menu={{ secondary: true }} panes={panes} />
      </div>

      <BasicModal
        show={showModal}
        close={onOpenCloseModal}
        title="Create a new post"
        size="large"
      >
        <PostForm onClose={onOpenCloseModal} onReload={onReload} />
      </BasicModal>
    </>
  );
}
