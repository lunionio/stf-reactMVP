import { colors } from "../utils/constants";
import OportunidadesScreen from "../screens/Oportunidades";
import AgendaScreen from "../screens/Agenda";
import HistoricoScreen from "../screens/Historico";
import { FontAwesome } from "@expo/vector-icons";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import React from "react";

const TabNav = createBottomTabNavigator(
  {
    Novidades: {
      screen: OportunidadesScreen,
      navigationOptions: {
        tabBarOnPress: () => {},
        tabBarLabel: "Oportunidades",
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome
            name="external-link-square"
            size={25}
            color={tintColor}
          />
      }
    },
    Agenda: {
      screen: AgendaScreen,
      navigationOptions: {
        tabBarLabel: "Agenda",
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome name="calendar" size={25} color={tintColor} />
      }
    },
    Historico: {
      screen: HistoricoScreen,
      navigationOptions: {
        tabBarLabel: "Historico",
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome name="book" size={25} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.BASE,
      inactiveTintColor: colors.BLACK,
      inactiveBackgroundColor: colors.WHITE,
      activeBackgroundColor: colors.WHITE,
      showIcon: true,
      showLabel: true,
      indicatorStyle: {
        backgroundColor: colors.BASE
      },
      style: {
        backgroundColor: colors.WHITE
      },
      upperCaseLabel: false
    },
    tabBarPosition: "bottom",
    swipeEnabled: Platform.OS !== "ios",
    animationEnabled: Platform.OS !== "ios"
  }
);

export default TabNav;
