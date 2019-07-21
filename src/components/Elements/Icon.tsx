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
  faCloudMoon
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
  faCloudMoon
);

interface IconProps {
  icon: any;
  size?: any;
}

export default ({ icon, size = "5x" }: IconProps) => (
  <FontAwesomeIcon icon={icon} size={size} />
);
