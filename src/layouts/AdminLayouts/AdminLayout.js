import React from "react";
import { Icon } from "../../assets";

import "./AdminLayout.scss";
import { AdminMenu, Logout } from "../../components/Admin/AdminLayout";

export function AdminLayout(props) {
  const { children } = props;

  return (
    <div className="admin-layout">
      <div className="admin-layout-left">
        <Icon.LogoWhite className="logo" />
        <AdminMenu />
      </div>

      <div className="admin-layout-right">
        <div className="admin-layout-right-header">
          <Logout />
        </div>

        <div className="admin-layout-right-content">{children}</div>
      </div>
    </div>
  );
}
