import React from "react";
import styled from "styled-components/native";
import TextLabel from "../TextLabel";
import Icon from "../../lib/RenderIcon";

const TouchableOpacity = styled.TouchableOpacity`
  max-height: 56;
  min-height: 56;
  width: 100%;
`;

const Container = styled.View`
  flex: 1;
  max-width: 80%;
  min-width: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: 1;
  border-color: #3b5998;
  border-radius: 25;
  background-color: #3b5998;
`;

const Content = styled.View`
  flex: 1;
  margin-right: 15px;
  max-width: 40;
  max-height: 40;
  min-width: 40;
  min-height: 40;
  justify-content: center;
  align-items: center;
`;

const FacebookButton = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Container>
        <Content>
          <Icon name="facebookLogo" />
        </Content>
        <TextLabel
          color={"white"}
          fontSize={18}
          label={"Entrar com o Facebook"}
        />
      </Container>
    </TouchableOpacity>
  );
};

export default FacebookButton;
