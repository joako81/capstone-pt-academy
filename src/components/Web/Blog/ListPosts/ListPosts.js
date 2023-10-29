import React, { useState, useEffect } from "react";
import { Loader, Pagination } from "semantic-ui-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { map } from "lodash";
import { ListPostItem } from "../ListPostItem";
import { Post } from "../../../../api";

import "./ListPosts.scss";

const postController = new Post();

export function ListPosts() {
  const [posts, setPosts] = useState(null);
  const [searchParams] = useSearchParams();
  const [pagination, setPagination] = useState();
  const [page, setPage] = useState(searchParams.get("page") || 1);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await postController.getPosts(page); //cambiamos el 1 para poner el límite de articulos gitde paginación
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
  }, [page]);

  const changePage = (_, data) => {
    const newPage = data.activePage;
    setPage(newPage, true);
    navigate(`?page=${newPage}`);
  };

  if (!posts) return <Loader active inline="centered" />;

  return (
    <div className="list-posts-blog">
      <div className="list">
        {map(posts, (post) => (
          <div dey={post._id} className="item">
            <ListPostItem post={post} />
          </div>
        ))}
      </div>

      <div className="pagination">
        <Pagination
          defaultActivePage={pagination.page}
          totalPages={pagination.pages}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          secondary
          pointing
          onPageChange={changePage}
        />
      </div>
    </div>
  );
}
