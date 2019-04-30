import React from "react";
import iconMapping from "../../utils/code-to-icon-mapping.json";
import { get } from "lodash";
import styles from "./WeatherIconComponent.module.scss";

export const lookupIcon = iconCode => {
  const iconData = get(iconMapping, iconCode);
  return iconData && iconData.icon;
};

export const WeatherIconComponent = props => {
  if (!props && !props.iconCode) return null;

  const { iconCode } = props;
  const iconName = lookupIcon(iconCode);

  if (!iconName) return null;
  return (
    <svg className={`svg-${iconCode} ${styles.icon}`}>
      <use xlinkHref={"#" + iconName} />
    </svg>
  );
};

export default WeatherIconComponent;
