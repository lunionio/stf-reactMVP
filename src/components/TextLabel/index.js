import React from "react";
import styled from "styled-components/native";

const Label = styled.Text`
  ${props =>
    props.color &&
    `
      color: ${props.color};
  `};

  ${props =>
    props.fontFamily &&
    `
      ${props.fontFamily};
  `};

  ${props =>
    props.fontWeight &&
    `
      font-weight: ${props.fontWeight};
  `};

  ${props =>
    props.fontSize &&
    `
      font-size: ${props.fontSize};
  `};

  ${props =>
    props.textAlign &&
    `
      text-align: ${props.textAlign}
  `};
`;

const TextLabel = ({
  color,
  fontFamily,
  fontWeight,
  fontSize,
  label,
  textAlign
}) => {
  return (
    <Label
      color={color}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      fontSize={fontSize}
      textAlign={textAlign}
    >
      {label}
    </Label>
  );
};

export default TextLabel;
