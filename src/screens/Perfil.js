import React, { Component } from "react";
import styled from "styled-components/native";
import TextLabel from "../components/TextLabel";
import Spacer from "../components/Spacer";
import {colors} from "../utils/constants";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";



const Container = styled.View`
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
  border-top-color: #9d9d9d;
  padding-bottom: 10; 
  padding-top: 10; 
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

const ButtonExit = styled.TouchableOpacity`
flex: 1;
flex-direction: row;
margin-top:30;
width: 100%;
justify-content: center;
align-items: center; 
`

class PerfilScreen extends Component {
  render() {

    return (
      <ScrollView>
      <Container>        
        <Spacer min={10} max={10} />
        <TextLabel fontWeight={"bold"} fontSize={30} label={"CONTA"} />
        <Spacer min={10} max={10} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("PerfilDetalhes")}
        >
          <ItemContent>
            <ImageContent>
              <Ionicons name="ios-arrow-forward" size={30} color={colors.BASE} />
            </ImageContent>
            <ItemTextContent>
              <TextLabel fontSize={20} label={"Editar Perfil"} />
            </ItemTextContent>
          </ItemContent>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AreaAtuacao")}
        >
          <ItemContent>
            <ImageContent>
              <Ionicons name="ios-arrow-forward" size={30} color={colors.BASE} />
            </ImageContent>
            <ItemTextContent>
              <TextLabel fontSize={20} label={"Área de atuação"} />
            </ItemTextContent>
          </ItemContent>
        </TouchableOpacity>      
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("DadosBancarios")}
        >
          <ItemContent>
            <ImageContent>
              <Ionicons name="ios-arrow-forward" size={30} color={colors.BASE} />
            </ImageContent>
            <ItemTextContent>
              <TextLabel fontSize={20} label={"Dados bancários"} />
            </ItemTextContent>
          </ItemContent>
        </TouchableOpacity>      
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("MeusDocumentos")}
        >
          <ItemContent>
            <ImageContent>
              <Ionicons name="ios-arrow-forward" size={30} color={colors.BASE} />
            </ImageContent>
            <ItemTextContent>
              <TextLabel fontSize={20} label={"Documentação"} />
            </ItemTextContent>
          </ItemContent>
        </TouchableOpacity>      
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Curriculo")}
        >
          <ItemContent>
            <ImageContent>
              <Ionicons name="ios-arrow-forward" size={30} color={colors.BASE} />
            </ImageContent>
            <ItemTextContent>
              <TextLabel fontSize={20} label={"Currículo"} />
            </ItemTextContent>
          </ItemContent>
        </TouchableOpacity>      
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("FormacaoAcademica")}
        >
          <ItemContent>
            <ImageContent>
              <Ionicons name="ios-arrow-forward" size={30} color={colors.BASE} />
            </ImageContent>
            <ItemTextContent>
              <TextLabel fontSize={20} label={"Formação acadêmica"} />
            </ItemTextContent>
          </ItemContent>
        </TouchableOpacity>      
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("RedefinirSenha")}
        >
          <ItemContent>
            <ImageContent>
              <Ionicons name="ios-arrow-forward" size={30} color={colors.BASE} />
            </ImageContent>
            <ItemTextContent>
              <TextLabel fontSize={20} label={"Redefinir Senha"} />
            </ItemTextContent>
          </ItemContent>
        </TouchableOpacity>      
        <Spacer min={20} max={20} />
        <TextLabel fontWeight={"bold"} fontSize={30} label={"PREFERÊNCIAS"} />
        <Spacer min={10} max={10} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Notificacoes")}
        >
          <ItemContent>
            <ImageContent>
              <Ionicons name="ios-arrow-forward" size={30} color={colors.BASE} />
            </ImageContent>
            <ItemTextContent>
              <TextLabel fontSize={20} label={"Notificações"} />
            </ItemTextContent>
          </ItemContent>
        </TouchableOpacity> 
        <ButtonExit
          onPress={() => this.props.navigation.navigate("Login")}
        >         
        <FontAwesome
            name="power-off"
            size={20}
            color={"#000000"}
          />          
          <TextLabel fontSize={20} label={"Sair"} />     
        </ButtonExit>
        </Container>    
        </ScrollView>       
    );
  }
}

export default PerfilScreen;
