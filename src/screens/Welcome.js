import { Ionicons, FontAwesome } from "@expo/vector-icons";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert } from "react-native";
import styled from "styled-components/native";
import { Button } from "../components";
import Spacer from "../components/Spacer";
import TextLabel from "../components/TextLabel";
import FacebookButton from "../components/FacebookButton";
import {colors} from '../utils/constants'
import recoveryPasswordActions from "../actions/recoveryPasswordActions/actions";
import { recoveryPasswordHelper } from "../lib/recoveryPasswordHelper";

const loginMock = {
  username: "padilha",
  password: "1234"
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #ffffff;
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
  top: -30%;
  min-width: 110%;
  max-width: 110%;
  min-height: 80%;
  max-height: 80%;
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
  height: 45%;
  max-height: 45%;
  background-color: white;
  overflow: hidden;
  border-width: 1;
  border-bottom-width: 3;
  border-radius: 15;
  border-color: #ddd;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
`;

const InputTextContent = styled.View`
  flex: 1;
  min-height: 46;
  max-height: 46;
  flex-direction: row;
  align-items: center;
  min-width: 80%;
  max-width: 80%;
  padding-left: 15;
  padding-right: 15;
  border-width: 1;
  border-color: #a7a7a7;
  border-radius: 25;
`;

const InputText = styled.TextInput`
  flex: 1;
  font-size: 15;
  min-height: 50;
  max-height: 50;
  margin-left: 10;
  color: red;
`;

const Icon = styled.Image`
  min-width: 20;
  min-height: 20;
  max-width: 20;
  max-height: 20;
  resize-mode: contain;
`;

const IconLogo = styled.Image`
  min-width: 150;
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

const IconRightContainer = styled.TouchableOpacity``;
const RecoveryContainer = styled.TouchableOpacity``;


const AccountCreationContentSpacer = styled.View`margin-left: 15;`;

const ButtonContainer = styled.View``;

class WelcomeScreen extends Component {
  constructor()
  {
    super();
 
    this.state = { hidePassword: true }
  }

 
  state = {
    username: "padilha",
    password: "1234"
  };

  managePasswordVisibility = () => {
    this.setState({
      hidePassword: !this.state.hidePassword
    })
  }

  render() {
    const { username, password } = this.state;

    return (
      <Container>
        <ContainerBackground>
          <BackgroundImage
            source={require("../assets/images/login_background.png")}
          />
        </ContainerBackground>
        <Spacer min={30} max={30} />
        <ContainerView>
          <IconLogo source={require(".././assets/images/staffPro_logo.png")} />
          <Spacer min={5} max={5} />
          <InputTextContainer>
            <Spacer min={5} max={5} />
            <InputTextContent>            
            <FontAwesome name="user-o" size={25} color="#a7a7a7" />      
              <InputText
                placeholderTextColor={colors.BASE}
                placeholder="email@email.com"
                multiline={false}
                numberOfLines={1}
                underlineColorAndroid="transparent"
                autoCapitalize={"none"}
                
                onChangeText={text => this.setState({ username: text })}
              />
            </InputTextContent>
            <Spacer min={15} max={15} />            
            <InputTextContent>
            <Ionicons name="md-key" size={25} color="#a7a7a7" />              
              <InputText
                placeholderTextColor={colors.BASE}
                placeholder="senha"
                multiline={false}
                numberOfLines={1}
                underlineColorAndroid="transparent"
                autoCapitalize={"none"}
               secureTextEntry = { this.state.hidePassword }
                onChangeText={text => this.setState({ password: text })}
              />
            <IconRightContainer onPress = { this.managePasswordVisibility }>
               <Ionicons name={ ( this.state.hidePassword ) ? "md-eye" : "md-eye-off" } size={25} color="#a7a7a7" />
            </IconRightContainer>
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
            <RecoveryContainer onPress={() => {
              recoveryPasswordHelper.recovery(this.props.recoveryPasswordActions);
            }}>
            <TextLabel
              fontSize={14}
              color={"rgba(0,0,0,0.5)"}
              label={"Esqueceu sua senha?"}
            />
            </RecoveryContainer>
            <Spacer min={5} max={5} />
          </InputTextContainer>
          <Spacer min={15} max={15} />
          <TextLabel
            fontSize={18}
            color={"rgba(0,0,0,0.5)"}
            label={"Ou entre com"}
          />
          <Spacer min={15} max={15} />
          <FacebookContainer>
            <FacebookButton />
          </FacebookContainer>
          <AccountCreationContent>
            <TextLabel
              fontSize={18}
              color={"rgba(0,0,0,0.5)"}
              label={"Não possui uma conta?"}
            />
            <AccountCreationContentSpacer>
              <TextLabel fontSize={18} color={"red"} label={"Crie aqui"} />
            </AccountCreationContentSpacer>
          </AccountCreationContent>
        </ContainerView>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    recoveryPasswordData: state.recoveryPasswordData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    recoveryPasswordActions: type => dispatch(recoveryPasswordActions(type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  WelcomeScreen
);
