import React, { Component } from "react";
import styled from "styled-components/native";
import Spacer from "../components/Spacer";
import {IconLogo} from "../components";
import StepIndicator from 'react-native-step-indicator';
import {colors} from '../utils/constants';
import { BackIcon } from "../components/icons";
import { Header} from 'react-native-elements';

const labels = ["Dados Pessoais","Localização","Dados Profissionais"];

const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: colors.BASE,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: colors.BASE,
    stepStrokeUnFinishedColor: '#9D9D9D',
    separatorFinishedColor: colors.BASE,
    separatorUnFinishedColor: '#9D9D9D',
    stepIndicatorFinishedColor: colors.BASE,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: colors.BASE,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#9D9D9D',
    labelColor: '#999999',
    labelSize: 15,
    currentStepLabelColor: '#fe7013'
  }
  
const Container = styled.View`
  flex: 1;
  margin-left: 0px;
  margin-right: 0px;
`; 
const MainContainer = styled.View`
  flex: 1;
  margin-left: 20px;
  margin-right: 20px;
`;

const ItemContent = styled.View`
  flex: 1;
  width: 100%;
  height: 35;
  max-height: 35;
  border-top-width: 1px;
  border-top-color: red;
`;

const ImageContent = styled.View`
  flex: 1;
  width: 100%;
  height: 35;
  max-height: 35;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
`;

const Image = styled.Image`
  flex: 1;
  min-width: 15;
  min-height: 15;
  max-width: 15;
  max-height: 15;
  resize-mode: contain;
`;

const ItemTextContent = styled.View`
  flex: 1;
  width: 100%;
  height: 35;
  max-height: 35;
  justify-content: center;
  align-items: flex-start;
`;

const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  height: 35;
  max-height: 35;
`;

class CadastroScreen extends Component {
    constructor() {
        super()
        this.state = {
            currentPosition: 0,
            stepCount: 3
        }
    }
    
  render() {
   
    return (
      <Container>
      <Header
      placement="left"
      backgroundColor={colors.BASE}
      leftComponent={ <BackIcon onPress={() => this.props.navigation.navigate("Login")} />}
      centerComponent={<IconLogo/> } 
      />  
      <MainContainer>       
        <Spacer min={20} max={20} />
        <StepIndicator
         customStyles={customStyles}
         currentPosition={this.state.currentPosition}
         labels={labels}
    />
      </MainContainer>
      </Container>
    );
  }

  onPageChange(position){
    this.setState({currentPosition: position});
}
}

export default CadastroScreen;
