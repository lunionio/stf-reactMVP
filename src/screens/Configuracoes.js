import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { FormattedWrapper, FormattedMessage } from 'react-native-globalize';

import { changeLanguage } from '../actions'
import { Button } from '../components';
import messages from '../Messages';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.WHITE};
`;

class ConfiguracoesScreen extends Component {
  render() {
    return (
			<FormattedWrapper locale={this.props.curState.Language.language} messages={messages}>
        <ContainerView>
          <TitleText><FormattedMessage
            message="Configurações"
          /></TitleText>
				  <Button text="Alterar idioma para" onPress={() => {this.props.changeLanguage('es')}} />
        </ContainerView>
			</FormattedWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
	curState:state
});

export default connect(mapStateToProps, {
	changeLanguage,
})(ConfiguracoesScreen);
