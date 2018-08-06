import React from "react";
import styled from "styled-components/native";
import { StatusBar as NativeStatusBar, Platform } from "react-native";
import isIphoneX from "../../lib/StatusBarHeight";

const MarginWrapper = styled.View`
  height: ${isIphoneX() ? 44 : 20};

  elevation: ${props => {
    if (props.color) return 6;
    return 1;
  }};

  z-index: ${props => {
    if (props.color) return 6;
    return 1;
  }};

  ${props =>
    props.color
      ? `background-color: ${props.color}`
      : `background-color: ${colors.white}`};
`;

function StatusBar({ color, dark }) {
  return (
    <MarginWrapper color={color}>
      {
        <NativeStatusBar
          barStyle={
            dark || !color
              ? Platform.OS === "ios" ? "dark-content" : "light-content"
              : "light-content"
          }
          backgroundColor={color}
          animated
          translucent
        />
      }
    </MarginWrapper>
  );
}

export default StatusBar;
