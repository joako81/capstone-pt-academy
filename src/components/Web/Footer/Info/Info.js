import React from "react";
import { Button, Icon as SemanticIcon } from "semantic-ui-react";
import { map } from "lodash";
import { Icon } from "../../../../assets";
import { socialData } from "../../../../utils";

import "./Info.scss";

export function Info() {
  return (
    <div className="footer-info">
      <Icon.LogoWhite className="logo" />
      <p>
        Enter the world of personal training, specialize and make your clients
        achieve their goals your clients achieve their goals
      </p>

      <div className="social-media">
        {map(socialData, (social) => (
          <Button key={social.type} as="a" href={social.link}>
            <SemanticIcon name={social.icon} />
            {}
            {/* Utiliza el nombre del ícono de socialData */}
          </Button>
        ))}
      </div>
    </div>
  );
}
