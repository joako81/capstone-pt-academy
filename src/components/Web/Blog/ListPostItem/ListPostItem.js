import React from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import { ENV } from "../../../../utils";
import Truncate from "react-truncate";
import "./ListPostItem.scss";

export function ListPostItem(props) {
  const { post } = props;
  const date = new Date(post.created_at);

  // Elimina las etiquetas HTML del contenido del post
  const content = post.content.replace(/(<([^>]+)>)/gi, "");

  return (
    <Link className="list-post-item" to={`/blog/${post.path}`}>
      <div className="list-post-item-img">
        <Image src={`${ENV.BASE_PATH}/${post.miniature}`} fluid />
        <div className="date">
          {DateTime.fromISO(date.toISOString())
            .setLocale("es")
            .toFormat("dd 'de' LLL 'del' yyyy")}
        </div>
      </div>

      <div className="list-post-item-wrapper">
        <div className="list-post-item-wrapper-title">
          <h2>{post.title}</h2>
        </div>
        <div className="list-post-item-wrapper-content">
          <Truncate lines={4} ellipsis={<span>...</span>}>
            <h3>{content}</h3>
          </Truncate>
        </div>
      </div>
    </Link>
  );
}
