import React, { useState, useEffect } from "react";
import { Newsletter } from "../../../../api";
import { Loader, Pagination } from "semantic-ui-react";
import { map, size } from "lodash";
import { useAuth } from "../../../../hooks";
import { EmailItem } from "../EmailItem";
import "./ListEmails.scss";
import { CSVLink } from "react-csv";
import mailerLite from "../../../../api/mailerLiteApi";

const newsletterController = new Newsletter();

export function ListEmails() {
  const [emails, setEmails] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [reload, setReload] = useState(false);
  const [page, setPage] = useState(1);
  const { accessToken } = useAuth();

  const onReload = () => setReload((prevState) => !prevState);

  useEffect(() => {
    (async () => {
      try {
        const response = await newsletterController.getEmails(
          accessToken,
          page
        );
        setEmails(response.docs);
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
  }, [accessToken, page, reload]);

  const changePage = (_, data) => {
    setPage(data.activePage);
  };

  const data = emails ? emails.map((email) => [email.email]) : [];

  if (!emails) return <Loader active inline="centered" />;
  if (size(emails) === 0) return "No hay emails registrados";

  mailerLite
    .post(`/groups/${108004927724324789}/subscribers`, {
      email: "new_subscriber@example.com",
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="list-emails">
      <CSVLink
        data={data}
        filename={"emails-newsletter.csv"}
        className="btn-download"
      >
        Download CSV - Newsletter - Email
      </CSVLink>
      {map(emails, (email) => (
        <EmailItem key={email._id} email={email} onReload={onReload} />
      ))}

      <div className="list-emails-pagination">
        <Pagination
          totalPages={pagination.pages}
          defaultActivePage={pagination.page}
          ellipsisItem={false}
          firstItem={false}
          lastItem={false}
          onPageChange={changePage}
        />
      </div>
    </div>
  );
}
