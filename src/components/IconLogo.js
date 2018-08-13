import React, { Component } from "react";
import styled from "styled-components/native";

const IconLogoContainer = styled.Image`
  min-width: 110;
  min-height: 46;
  max-width: 110;
  max-height: 46;
  resize-mode: contain;
`;
class IconLogo extends Component {
  render() {  
    return (
        <IconLogoContainer
        source={require(".././assets/images/staffPro_logo.png")}
      />
    );
  }
}

export default IconLogo;
