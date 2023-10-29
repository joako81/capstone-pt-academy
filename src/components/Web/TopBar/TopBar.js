import React, { useState, useEffect } from "react";
import { Container, Button, Icon as SemanticIcon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { map } from "lodash";
import { Menu } from "../../../api";
import { Icon as CustomIcon } from "../../../assets";
import { socialData } from "../../../utils";

import "./Topbar.scss";

const menuController = new Menu();

export function TopBar() {
  const [menu, setMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const response = await menuController.getMenu(true);
        setMenu(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="top-bar">
      <Container>
        <div className="top-bar-left">
          <Link to="/" className="logo">
            <CustomIcon.LogoWhite />
          </Link>

          <div className="menu">
            {map(menu, (item) => (
              <a
                key={item._id}
                href={item.path}
                className={location.pathname === item.path ? "active" : ""}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

        <div className="social-media">
          {map(socialData, (social) => (
            <Button key={social.type} as="a" href={social.link}>
              <SemanticIcon name={social.icon} />
              {}
              {/* Utiliza el nombre del ícono de socialData */}
            </Button>
          ))}
        </div>
      </Container>
    </div>
  );
}
