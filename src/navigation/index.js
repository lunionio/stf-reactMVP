import React, { Component } from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";
import styled from "styled-components/native";
import { connect } from "react-redux";
import {
  AgendaScreen,
  AjudaScreen,
  AreaAtuacaoScreen,
  CadastroScreen,
  CurriculoScreen,
  DadosBancariosScreen,
  DetalhesScreen,
  FaleConoscoScreen,
  FormacaoAcademicaScreen,
  HistoricoScreen,
  LoginScreen,
  MeusDocumentosScreen,
  OportunidadesScreen,
  PerfilScreen,
  PerfilDetalhesScreen,
  NotificacoesScreen,
  RedefinirSenhaScreen
} from "../screens";
import WorkPopUp from "../components/WorkPopUp";
import workActions from "../actions/workActions/actions";
import RecoveryPopUp from "../components/RecoveryPopUp";
import recoveryPasswordActions from "../actions/recoveryPassword/actions";
import StatusBar from "../components/StatusBar";
import DrawerNavigator from "./DrawerNavigator";

const makeMainNavigator = initialRouteName => {
  return createStackNavigator(
    {
      Agenda: { screen: AgendaScreen },
      Ajuda: { screen: AjudaScreen },
      AreaAtuacao: { screen: AreaAtuacaoScreen },
      Cadastro: { screen: CadastroScreen },
      Curriculo: { screen: CurriculoScreen },
      DadosBancarios: { screen: DadosBancariosScreen },
      Detalhe: { screen: DetalhesScreen },
      FaleConosco: { screen: FaleConoscoScreen },
      FormacaoAcademica: { screen: FormacaoAcademicaScreen },
      Historico: { screen: HistoricoScreen },
      Login: { screen: LoginScreen },
      MeusDocumentos: { screen: MeusDocumentosScreen },
      Oportunidades: { screen: OportunidadesScreen },
      Perfil: { screen: PerfilScreen },
      PerfilDetalhes: { screen: PerfilDetalhesScreen },
      Notificacoes: { screen: NotificacoesScreen },
      RedefinirSenha: {screen: RedefinirSenhaScreen},
      Main: {
        screen: DrawerNavigator
      }
    },
    {
      initialRouteName: initialRouteName,
      headerMode: "none"
    }
  );
};

const MainSafeAreaView = styled.View`flex: 1;`;

class InitialRouteNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MainNavigator: null
    };
  }

  componentWillMount() {
    this.setState({
      MainNavigator: makeMainNavigator("Login")
    });
  }

  render() {
    const { MainNavigator } = this.state;

    return (
      <View style={{ flex: 1, elevation: 1, zIndex: 1 }}>
       <MainSafeAreaView>
          <StatusBar color={"rgb(255, 74, 16)"} />
          {this.props.workData.show &&
            <WorkPopUp
              workData={this.props.workData}
              workActions={this.props.workActions}
            />}

            {this.props.recoveryPasswordData.show &&
            <RecoveryPopUp
            recoveryPasswordData={this.props.recoveryPasswordData}
            recoveryPasswordActions={this.props.recoveryPasswordActions}
            />
            }
          <MainNavigator />
        </MainSafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    workData: state.workData,
    recoveryPasswordData: state.recoveryPasswordData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    workActions: type => dispatch(workActions(type)),
    recoveryPasswordActions: type => dispatch(recoveryPasswordActions(type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  InitialRouteNavigator
);
