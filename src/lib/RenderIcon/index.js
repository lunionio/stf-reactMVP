import React from "react";
import facebookLogo from "./icons/facebookLogo";
import search from "./icons/search";

const files = {
  facebookLogo: facebookLogo,
  search: search
};

const renderIcon = icon => {
  const selectedIcon = Object.keys(files).filter(iconFile => icon === iconFile);
  return files[selectedIcon];
};

const Icon = props => {
  const IconRendered = renderIcon(props.name);
  return <IconRendered {...props} />;
};

export default Icon;
