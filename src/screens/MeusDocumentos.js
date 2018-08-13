import React, { Component } from "react";
import styled from "styled-components/native";
import TextLabel from "../components/TextLabel";
import UploadButton from "../components/UploadButton";
import Spacer from "../components/Spacer";
import {colors} from '../utils/constants';
import { BackIcon } from "../components/icons";
import {IconLogo} from "../components";
import {  Foundation, MaterialIcons } from "@expo/vector-icons";
import { Header} from 'react-native-elements';



const MasterContainer = styled.View`
  flex: 1;
  margin-left: 0px;
  margin-right: 0px;
`;  

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #ffff;
  flex-direction: column;
`;

const InputText = styled.TextInput`
  flex: 1;
  min-width: 90%;
  font-size: 17;
  flex-direction: column;
`;

const InputTextContent = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  border: 1px solid
    ${props => (props.borderColor ? props.borderColor : "black")};
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

const InputTextStatusContent = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction: row;
`;

const InputTextStatusContentLeft = styled.View`
  width: 50%;
  justify-content: center;
  align-items: flex-start;
`;
const InputTextStatusContentRight = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Icon = styled.Image`
  min-width: 15;
  min-height: 15;
  max-width: 15;
  max-height: 15;
  resize-mode: contain;
  margin-left: 5px;
`;

const DocumentContainer = styled.View`
  flex: 1;
  min-width: 100%;
  height: 120;
  max-height: 120;
  flex-direction: column;
`;

const SendDocumment = styled.View`
  flex: 1;
  min-width: 100%;
  height: 25;
  max-height: 25;
  justify-content: center;
  align-items: center;
  background-color: "#ff9472"
`;

const BoxInfoContent = styled.View`
  flex: 1;
  min-width: 100%;
  height: 40;
  max-height: 40;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.color ? props.color : "red")};
`;

const IconTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  padding-right: 20px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TouchableOpacity = styled.TouchableOpacity`flex: 1;`;

class MeusDocumentos extends Component {
  render = () => {
    return (
      <MasterContainer>
         <Header
      placement="left"
      backgroundColor={colors.BASE}
      leftComponent={ <BackIcon onPress={() => this.props.navigation.navigate("Perfil")} />}
      centerComponent={<IconLogo/> } 
      />  
      <Container>
        <DocumentContainer>
          <InputTextStatusContent>
            <InputTextStatusContentLeft>
              <TextLabel
                color={"black"}
                fontWeight={"bold"}
                fontSize={19}
                label={"RG"}
              />
            </InputTextStatusContentLeft>
            <InputTextStatusContentRight>
              <TextLabel color={"orange"} fontSize={15} label={"EM ANALISE"} />
              <Icon source={require(".././assets/images/ic_info_alert.png")} />
            </InputTextStatusContentRight>
          </InputTextStatusContent>

          <InputTextContent borderColor={"orange"}>
            <InputText
              keyboardType="numeric"
              underlineColorAndroid="rgba(0,0,0,0)"
              label="45.288.720-3"
            />
            
          </InputTextContent>
          <Spacer min={10} max={10} />
        <TouchableOpacity>
          <BoxInfoContent color={"#ff9472"}>
            <TextLabel
              color={"white"}
              fontSize={20}
              label={"Aguardando aprovação"}
            />           
          </BoxInfoContent>
        </TouchableOpacity>
        </DocumentContainer>
        <Spacer min={15} max={15} />
        <DocumentContainer>
          <InputTextStatusContent>
            <InputTextStatusContentLeft>
              <TextLabel
                color={"black"}
                fontWeight={"bold"}
                fontSize={19}
                label={"CPF"}
              />
            </InputTextStatusContentLeft>
            <InputTextStatusContentRight>
              <TextLabel color={"green"} fontSize={15} label={"CONFIRMADO"} />
              <Icon source={require(".././assets/images/ic_card_check.png")} />
            </InputTextStatusContentRight>
          </InputTextStatusContent>
          <InputTextContent borderColor={"green"}>
            <InputText
              keyboardType="numeric"
              underlineColorAndroid="rgba(0,0,0,0)"
              label="233.222.333-23"
            />
            <IconTouchableOpacity>
              <TextLabel color={"red"} fontSize={15} label={""} />
            </IconTouchableOpacity>
          </InputTextContent>       
          <Spacer min={10} max={10} />
        <TouchableOpacity>
          <BoxInfoContent color={"#ff9472"}>
            <TextLabel
              color={"white"}
              fontSize={20}
              label={"Documento já confirmado"}
            />           
          </BoxInfoContent>
        </TouchableOpacity> 
        </DocumentContainer>
        <Spacer min={15} max={15} />
        <DocumentContainer>
          <InputTextStatusContent>
            <InputTextStatusContentLeft>
              <TextLabel
                color={"black"}
                fontWeight={"bold"}
                fontSize={19}
                label={"CNPJ"}
              />
            </InputTextStatusContentLeft>
            <InputTextStatusContentRight>
              <TextLabel color={"orange"} fontSize={15} label={"PENDENTE"} />
              <Icon source={require(".././assets/images/ic_info_alert.png")} />
            </InputTextStatusContentRight>
          </InputTextStatusContent>
          <InputTextContent borderColor={"orange"}>
            <InputText
              keyboardType="numeric"
              underlineColorAndroid="rgba(0,0,0,0)"
              label="233.222.333-23"
            />
            <IconTouchableOpacity>
              <TextLabel color={"red"} fontSize={15} label={""} />
            </IconTouchableOpacity>
          </InputTextContent>       
          <Spacer min={10} max={10} />
        <UploadButton></UploadButton>
        </DocumentContainer>
        
        <Spacer min={40} max={40} />
        <TouchableOpacity>
          <BoxInfoContent color={"green"}>
            <TextLabel
              color={"white"}
              fontSize={20}
              label={"SALVAR ALTERACÕES"}
            />           
          </BoxInfoContent>
        </TouchableOpacity>
      </Container>
      </MasterContainer>
    );
  };
}

export default MeusDocumentos;
