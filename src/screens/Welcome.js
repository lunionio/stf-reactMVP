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
  font-size: 30;
  color: #000;
`;


const InputTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80%;
  max-width: 80%;
  min-height: 45%;
  max-height: 45%;
  overflow: hidden;
`;

const InputTextContent = styled.View`
  flex: 1;
  min-height: 46;
  max-height: 46;
  flex-direction: row;
  align-items: center;
  min-width: 80%;
  max-width: 80%;
`;

const InputText = styled.TextInput`
  flex: 1;
  font-size: 15;
  background: #ffffff;
  min-height: 40;
  max-height: 40;
  color:#000;
  min-width: 312;
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
          <BackgroundImage
            source={require("../assets/images/background.jpg")}
          />
        </ContainerBackground>
        <Spacer min={30} max={30} />
        <ContainerView>
          <IconLogo source={require("../assets/images/logo.png")} />
          <InputTextContainer>
            <InputTextContent  style={{
              flexDirection: 'column',
               alignItems: 'flex-start'}}>
            <Text  style={{marginTop:' '}}>Usuario:</Text>
              <InputText
                placeholder="email@email.com"
                multiline={false}
                numberOfLines={1}
                underlineColorAndroid="transparent"
                autoCapitalize={"none"}
                onChangeText={text => this.setState({ username: text })}
              />
            </InputTextContent>
            <Spacer min={15} max={15} />
            <InputTextContent style={{
              flexDirection: 'column',
               alignItems: 'flex-start'}}>
            <Text>Senha:</Text>
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
                onPress={() =>
                  username !== loginMock.username ||
                  password !== loginMock.password
                    ? Alert.alert("Usuario ou senha incorretos")
                    : this.props.navigation.navigate("Main")}
              />
            </ButtonContainer>
            <Spacer min={20} max={20} />
            <TextLabel
              fontSize={14}
              color={"rgba(0,0,0,0.5)"}
              label={"Esqueceu sua senha?"}
            />
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
