import React, { useState } from "react";
import { Tab } from "semantic-ui-react";
import { LoginForm } from "../../../components/Admin/Auth";
import "./Auth.scss";
import { Icon } from "../../../assets";

export function Auth() {
  const [activeIndex, setActiveIndex] = useState(0);

  const panes = [
    {
      menuItem: "LOG INTO YOUR ADMINISTRATION PANEL",
      render: () => (
        <Tab.Pane>
          <LoginForm />
        </Tab.Pane>
      ),
    },
    /* {
      menuItem: "New User",
      render: () => (
        <Tab.Pane>
          <RegisterForm openLogin={openLogin} />
        </Tab.Pane>
      ),
    }, */
  ];

  return (
    <div className="auth">
      <Icon.LogoWhite className="logo" />
      <Tab
        panes={panes}
        className="auth__forms"
        activeIndex={activeIndex}
        onTabChange={(_, data) => setActiveIndex(data.activeIndex)}
      />
    </div>
  );
}
