import React from "react";
import {
  createDrawerNavigator,
  createStackNavigator,
  DrawerActions
} from "react-navigation";

import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import PerfilScreen from "../screens/Perfil";
import FaleConoscoScreen from "../screens/FaleConosco";
import { HamburgerIcon, BackIcon } from "../components/icons";
import { CustomDrawerContent } from "../components";
import TabNav from "./TabNav";
import styled from "styled-components/native";
import { colors } from "../utils/constants";
import AjudaScreen from "../screens/Ajuda";
import CadastroScreen from '../screens/Forms/Cadastro'

const HeaderContent = styled.View`
  flex: 1;
  position: relative;
  min-width: 100%;
  min-height: 68;
  max-width: 100%;
  max-height: 68;
  flex-direction: row;
  align-items: center;
  background-color: rgb(203, 203, 203);
  border-bottom-width: 1.7;
  border-bottom-color: rgba(0, 0, 0, 0.2);
`;

const HeaderLogoContent = styled.View`
  flex: 1;
  min-height: 100%;
  max-height: 100%;
  min-width: 20%;
  max-width: 20%;
  justify-content: center;
  align-items: center;
`;

const HeaderTextContent = styled.View`
  flex: 1;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

const IconLogo = styled.Image`
  min-width: 110;
  min-height: 46;
  max-width: 110;
  max-height: 46;
  resize-mode: contain;
`;

const Drawer = createDrawerNavigator(
  {
    Oportunidades: {
      screen: TabNav,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "Novas Oportunidades",
        drawerIcon: ({ tintColor }) =>
        <FontAwesome
        name="external-link-square"
        size={25}
        color={tintColor}
      />,
        headerLeft: <BackIcon onPress={() => navigation.goBack()} />
      })

    },
    Perfil: {
      screen: PerfilScreen,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "Perfil",
        drawerIcon: ({ tintColor }) =>
          <FontAwesome name="user-o" size={25} color={tintColor} />,
        headerLeft: <BackIcon onPress={() => navigation.goBack()} />
      })
    },
     FaleConosco: {
      screen: FaleConoscoScreen,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "FaleConosco",
        drawerIcon: ({ tintColor }) =>
          <MaterialIcons name="email" size={25} color={tintColor} />,
        headerLeft: <BackIcon onPress={() => navigation.goBack()} />
      })
    },
    Ajuda: {
      screen: AjudaScreen,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "Ajuda",
        drawerIcon: ({ tintColor }) =>
          <Ionicons name="md-help-circle" size={25} color={tintColor} />,
        headerLeft: <BackIcon onPress={() => navigation.goBack()} />
      })
    },
    Cadastro: {
      screen: CadastroScreen
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
    headerMode: "screen",
    navigationOptions: ({ navigation }) => ({
      header: props =>
        <HeaderContent>
          <HeaderTextContent>
            <IconLogo
              source={require(".././assets/images/logo.png")}
            />
          </HeaderTextContent>
          <HeaderLogoContent>
            <HamburgerIcon
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          </HeaderLogoContent>
        </HeaderContent>
    })
  }
);

export default DrawerNavigator;
