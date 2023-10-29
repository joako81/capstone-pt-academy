import React from "react";
import { Container } from "semantic-ui-react";
import { DateTime } from "luxon";
import { TopBar, Footer } from "../../components/Web";

import "./WebLayout.scss";

export function WebLayout(props) {
  const { children } = props;
  const currentDate = DateTime.now();
  const copyrightText = "ALL RIGHT RESERVED".toUpperCase();

  return (
    <div className="client-layout">
      <div className="client-layout-header">
        <TopBar />
      </div>

      {children}

      <div className="client-layout-footer">
        <Container className="client-layout-container">
          <Footer.Info />
          <Footer.Menu />
          <Footer.Newsletter />
        </Container>

        <Container className="client-layout-container">
          <span>
            © {currentDate.setLocale("es").toFormat("yyyy")} {copyrightText}
          </span>
          <span>Joaquín Rosa || Fullstack developer </span>
        </Container>
      </div>
    </div>
  );
}
