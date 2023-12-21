import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { map } from "lodash";
import { ListPostItem } from "../ListPostItem";
import { Post } from "../../../../api";
import { useInfiniteQuery } from "react-query";

import "./ListPosts.scss";

const postController = new Post();

export function ListPosts() {
  const [loading, setLoading] = useState(false);

  const fetchPosts = async ({ pageParam = 1 }) => {
    setLoading(true);
    const response = await postController.getPosts(pageParam);
    setLoading(false);
    const result = {
      posts: response.docs,
      nextPage: response.docs.length > 0 ? pageParam + 1 : undefined,
    };
    /* console.log(result);  */
    return result;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      "posts",
      ({ pageParam = 1 }) => fetchPosts({ pageParam }),
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    );

  useEffect(() => {
    const handleScroll = () => {
      /* console.log("Scroll event triggered");  */
      if (
        document.documentElement.scrollHeight - window.innerHeight <=
        document.documentElement.scrollTop
      ) {
        if (loading) return;
        if (!hasNextPage) return;
        if (isFetchingNextPage) return;

        const scrollPosition = document.documentElement.scrollTop;

        fetchNextPage().then(() => {
          /* console.log("Next page fetched");  */
          setTimeout(() => {
            window.scrollTo(0, scrollPosition);
          }, 0);
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasNextPage, fetchNextPage, isFetchingNextPage]);

  if (!data || loading) return <Loader active inline="centered" />;

  return (
    <div className="list-posts-blog">
      <div className="list">
        {map(data.pages, (page) =>
          map(page.posts, (post) => (
            <div key={post._id} className="item">
              <ListPostItem post={post} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
