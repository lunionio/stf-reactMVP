import React, { Component } from 'react';
import styled from 'styled-components/native';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.WHITE};
`;

class FaleConoscoScreen extends Component {
  render() {
    return (
      <ContainerView>
        <TitleText>Fale Conosco</TitleText>      
      </ContainerView>
    );
  }
}

export default FaleConoscoScreen;
