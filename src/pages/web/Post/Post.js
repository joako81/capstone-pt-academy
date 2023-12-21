import React, { useState, useEffect } from "react";
import { Container, Loader, Image } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { ENV } from "../../../utils";
import { Post as PostsController } from "../../../api";

import "./Post.scss";

const postController = new PostsController();

export function Post() {
  const [post, setPost] = useState(null);
  const { path } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await postController.getPostItem(path, { limit: 5 });
        /*      console.log("response", response); */
        setPost(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [path]);

  if (!post) return <Loader active inline="centered" />;

  return (
    <Container className="post">
      <h1 className="title">{post.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post?.content }}
      />

      <h1 className="post-image-post">
        <Image src={`${ENV.BASE_PATH}/${post.miniature}`} />
      </h1>
    </Container>
  );
}
