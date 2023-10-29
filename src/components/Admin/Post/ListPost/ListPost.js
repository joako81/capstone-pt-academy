import React, { useState, useEffect } from "react";
import { Post } from "../../../../api";
import { Loader, Pagination } from "semantic-ui-react";
import { map, size } from "lodash";
import { PostItem } from "../PostItem";
import "./ListPost.scss";

const postController = new Post();

export function ListPost(props) {
  const { reload, onReload } = props;
  const [posts, setPosts] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const response = await postController.getPosts(page);
        setPosts(response.docs);
        setPagination({
          limit: response.limit,
          page: response.page,
          pages: response.pages,
          total: response.total,
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page, reload, onReload]);

  const changePage = (_, data) => {
    setPage(data.activePage);
  };

  if (!posts) return <Loader active inline="centered" />;
  if (size(posts) === 0) return "No hay ningún Post";

  return (
    <div className="list-post">
      {map(posts, (post) => (
        <PostItem key={post._id} post={post} onReload={onReload} />
      ))}
      <div className="list-post-pagination">
        <Pagination
          totalPages={pagination.pages}
          defaultActivePage={pagination.page}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          onPageChange={changePage}
        />
      </div>
    </div>
  );
}
