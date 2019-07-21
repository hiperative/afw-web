import React from "react";
import * as fontawesome from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faCloudShowersHeavy,
  faSnowflake,
  faCloudMeatball,
  faWind,
  faSmog,
  faCloud,
  faCloudSun,
  faCloudMoon,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";

// Icons allowed
fontawesome.library.add(
  faSun,
  faMoon,
  faCloudShowersHeavy,
  faSnowflake,
  faCloudMeatball,
  faWind,
  faSmog,
  faCloud,
  faCloudSun,
  faCloudMoon,
  faSpinner
);

interface IconProps {
  icon: any;
  size?: any;
  animate?: boolean;
}

export default ({ icon, size = "5x", animate = false }: IconProps) => (
  <FontAwesomeIcon icon={icon} size={size} spin={animate} />
);
