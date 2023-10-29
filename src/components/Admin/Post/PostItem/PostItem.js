import React, { useState } from "react";
import { Button, Icon, Confirm } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { BasicModal } from "../../../Shared";
import { Post } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { PostForm } from "../PostForm";
import "./PostItem.scss";

const postController = new Post();

export function PostItem(props) {
  const { post, onReload } = props;
  const { accessToken } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const onOpenCloseConfirm = () => setShowConfirm((prevState) => !prevState);

  const onDelete = async () => {
    try {
      await postController.deletePost(accessToken, post._id);
      onReload();
      onOpenCloseConfirm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="post-item">
        <div className="post-item-info">
          <span className="post-item-info-title">{post.title}</span>
          <span className="post-item-info-path">{post.path}</span>
        </div>
        <div>
          <Button
            as={Link}
            icon
            to={`/blog/${post.path}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="eye" />
          </Button>

          <Button icon color="blue">
            <Icon name="pencil" onClick={onOpenCloseModal} />
          </Button>

          <Button icon color="red">
            <Icon name="trash" onClick={onOpenCloseConfirm} />
          </Button>
        </div>
      </div>

      <BasicModal
        show={showModal}
        close={onOpenCloseModal}
        title={`Edita el post: ${post.title}`}
        size="large"
      >
        <PostForm onClose={onOpenCloseModal} onReload={onReload} post={post} />
      </BasicModal>

      <Confirm
        open={showConfirm}
        onCancel={onOpenCloseConfirm}
        onConfirm={onDelete}
        content={`¿Eliminar ${post.title}?`}
        size="mini"
      />
    </>
  );
}
