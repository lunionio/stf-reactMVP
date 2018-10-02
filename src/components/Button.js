import React, { Component } from "react";
import { withTheme } from "styled-components";
import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity`
  width: 130;
  height: 40;
  backgroundColor: #11258A;
  justifyContent: center;
  alignItems: center;
`;

const Text = styled.Text`
  fontSize: 20;
  color: ${props => props.theme.WHITE};
`;

class Button extends Component {
  render() {
    const { text, onPress, theme } = this.props;

    return (
      <ButtonContainer onPress={onPress}>
        <Text>
          {text}
        </Text>
      </ButtonContainer>
    );
  }
}

export default withTheme(Button);
