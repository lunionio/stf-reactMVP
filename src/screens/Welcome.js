import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert,Text } from "react-native";
import styled from "styled-components/native";
import { Button } from "../components";
import Spacer from "../components/Spacer";
import TextLabel from "../components/TextLabel";
import FacebookButton from "../components/FacebookButton";
import { PasswordEyeIcon } from "../components/icons";


const loginMock = {
  username: "padilha",
  password: "1234"
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  
`;

const ContainerView = styled.View`
  flex: 1;
  align-items: center;
`;

const FacebookContainer = styled.View`
  flex: 1;
  max-height: 56;
  min-height: 56;
  justify-content: center;
  align-items: center;
`;

const ContainerBackground = styled.View`
  flex: 1;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
  align-items: center;
  position: absolute;
`;

const BackgroundImage = styled.Image`
  flex: 1;
  min-width: 110%;
  max-width: 110%;
  min-height: 100%;
  max-height: 100%;
  height:100%;
`;

const TitleText = styled.Text`
  font-size: 15;
  color: #5e5e5e;
`;


const InputTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 90%;
  max-width: 90%;
  min-height: 45%;
  max-height: 45%;
  overflow: hidden;
`;

const InputTextContent = styled.View`
  flex: 1;
  min-height: 46;
  max-height: 46;
  margin-top:10;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;  
  min-width: 90%;
  max-width: 90%;
`;

const InputText = styled.TextInput`
  flex: 1;
  font-size: 15;
  background: #ffffff;
  min-height: 40;
  max-height: 40;
  color:#000;
  min-width: 100%;
  max-width: 100%;
`;

const Icon = styled.Image`
  min-width: 20;
  min-height: 20;
  max-width: 20;
  max-height: 20;
  resize-mode: contain;
`;

const IconLogo = styled.Image`
  min-width: 300;
  min-height: 80;
  max-width: 150;
  max-height: 80;
  resize-mode: contain;
`;

const AccountCreationContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const LoginLogic = (usuario, senha,viewObj) => {
  objUsuario = { 
    	"ObjLogin":{
      "Login":usuario,
      "Senha":senha,
      "idCliente":2
	    }
   }

  fetch('http://seguranca.mundowebpix.com.br:5300/api/seguranca/Principal/loginUsuario/1/999', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(objUsuario),
    }).then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.id != 0){
        viewObj.props.navigation.navigate("Main")
      }else{
        Alert.alert("Usuario ou senha incorretos")
      }
    })
    .catch((error) => {
      console.error(error);
    });
}


const AccountCreationContentSpacer = styled.View`margin-left: 15;`;

const ButtonContainer = styled.View``;

class WelcomeScreen extends Component {
  state = {
    username: "padilha",
    password: "1234"
  };

  render() {
    const { username, password } = this.state;

    return (
      <Container>
        <ContainerBackground>
          <BackgroundImage style={{
            minWidth:'100%',
            minHeight:'100%',
            maxWidth:'100%',
            maxHeight:'100%',
            resizeMode: 'stretch'
            }}
            
            source={require("../assets/images/background.png")}
          />
        </ContainerBackground>
        <Spacer min={30} max={30} />
        <ContainerView>
          <IconLogo source={require("../assets/images/logo.png")} />
          <InputTextContainer>
            <InputTextContent  style={{
              flexDirection: 'column',
               alignItems: 'flex-start'}}>
            <Text >Usuario:</Text>
            <Spacer min={5} max={5} />
              <InputText
                placeholder="email@email.com"
                multiline={false}
                numberOfLines={1}
                underlineColorAndroid="transparent"
                autoCapitalize={"none"}
                onChangeText={text => this.setState({ username: text })}
              />
              <Spacer min={30} max={30} />
            </InputTextContent>
            <Spacer min={15} max={15} />
            <InputTextContent style={{
              flexDirection: 'column',
               alignItems: 'flex-start'}}>
            <Text>Senha:</Text>
            <Spacer min={5} max={5} />
              <InputText
                placeholder="senha"
                multiline={false}
                numberOfLines={1}
                underlineColorAndroid="transparent"
                autoCapitalize={"none"}
                secureTextEntry={true}
                onChangeText={text => this.setState({ password: text })}
              />
            </InputTextContent>
            <Spacer min={20} max={20} />
            <ButtonContainer>
              <Button
                text="ENTRAR"
                onPress={() => {LoginLogic(username,password,this)  }}
              />
            </ButtonContainer>
            <Spacer min={40} max={40} />
            <TextLabel
              fontSize={20}
              color={"#5e5e5e"}
              label={"Esqueceu sua senha? CLIQUE AQUI"}
            />
            <Spacer min={5} max={5} />
            <TitleText
              onPress={()=>{ this.props.navigation.navigate("Cadastro") } }
            >
              Não possui conta? CLIQUE AQUI
            </TitleText>
            <Spacer min={5} max={5} />
          </InputTextContainer>
    
        </ContainerView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  curState: state
});

export default connect(mapStateToProps, {})(WelcomeScreen);
