import React, { Component } from "react";
import { Platform, View } from "react-native";
import {
  createDrawerNavigator,
  createStackNavigator,
  createTabNavigator
} from "react-navigation";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import WelcomeScreen from "../screens/Welcome";
import OportunidadesScreen from "../screens/Oportunidades";
import AgendaScreen from "../screens/Agenda";
import HistoricoScreen from "../screens/Historico";
import ConfiguracoesScreen from "../screens/Configuracoes";
import { HamburgerIcon, BackIcon } from "../components/icons";
import WorkPopUp from "../components/WorkPopUp";
import workActions from "../actions/workActions/actions";
import { CustomDrawerContent } from "../components";
import { colors } from "../utils/constants";

const TabNav = createTabNavigator(
  {
    Novidades: {
      screen: OportunidadesScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Novas Oportunidades",
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome
            name="external-link-square"
            size={25}
            color={tintColor}
          />
      })
    },
    Agenda: {
      screen: AgendaScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Minha Agenda",
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome name="calendar" size={25} color={tintColor} />
      })
    },
    Historico: {
      screen: HistoricoScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Meu Historico",
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome name="book" size={25} color={tintColor} />
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.BASE,
      inactiveTintColor: colors.BLACK,
      inactiveBackgroundColor: colors.WHITE,
      activeBackgroundColor: colors.WHITE,
      showIcon: true,
      showLabel: Platform.OS === "ios",
      indicatorStyle: {
        backgroundColor: colors.BASE
      },
      style: {
        backgroundColor: colors.WHITE
      },
      upperCaseLabel: false
    },
    tabBarPosition: "bottom",
    swipeEnabled: true,
    animationEnabled: true
  }
);

const Drawer = createDrawerNavigator(
  {
    Novidades: {
      screen: TabNav
    },
    Configuracoes: {
      screen: ConfiguracoesScreen,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "Configurações",
        drawerIcon: ({ tintColor }) =>
          <Ionicons name="md-settings" size={23} color={tintColor} />,
        headerLeft: <BackIcon onPress={() => navigation.goBack()} />
      })
    }
  },
  {
    contentComponent: props => <CustomDrawerContent {...props} />,
    contentOptions: {
      activeBackgroundColor: colors.WHITE,
      activeTintColor: colors.BASE,
      inactiveTintColor: colors.WHITE
    }
  }
);

const DrawerNavigator = createStackNavigator(
  {
    DrawerNavigator: {
      screen: Drawer
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "Minha Agenda",
      drawerIcon: ({ tintColor }) =>
        <FontAwesome name="calendar" size={25} color={tintColor} />,
      headerStyle: {
        backgroundColor: colors.BASE
      },
      headerTitle: "Minha Agenda",
      headerTitleStyle: {
        color: colors.WHITE
      },
      headerLeft: (
        <HamburgerIcon onPress={() => navigation.navigate("DrawerOpen")} />
      )
    }),
    swipeEnabled: false,
    animationEnabled: false
  }
);

const makeMainNavigator = initialRouteName => {
  return createStackNavigator(
    {
      Welcome: { screen: WelcomeScreen },
      Main: {
        screen: DrawerNavigator
      }
    },
    {
      initialRouteName: initialRouteName,
      navigationOptions: {
        header: null
      }
    }
  );
};

const MainSafeAreaView = styled.View`flex: 1;`;

class InitialRouteNavigator extends Component {
  state = {
    MainNavigator: null
  };

  componentWillMount() {
    this.setState({ MainNavigator: makeMainNavigator("Welcome") });
  }

  render() {
    const { MainNavigator } = this.state;

    return (
      <View style={{ flex: 1, elevation: 1, zIndex: 1 }}>
        <MainSafeAreaView>
          {this.props.workData.show &&
            <WorkPopUp
              workData={this.props.workData}
              workActions={this.props.workActions}
            />}
          <MainNavigator />
        </MainSafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    workData: state.workData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    workActions: type => dispatch(workActions(type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  InitialRouteNavigator
);
