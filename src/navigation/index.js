import React, { Component } from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";
import styled from "styled-components/native";
import { connect } from "react-redux";
import WelcomeScreen from "../screens/Welcome";
import DadosBancariosScreen from "../screens/DadosBancarios";
import WorkPopUp from "../components/WorkPopUp";
import workActions from "../actions/workActions/actions";
import StatusBar from "../components/StatusBar";
import DrawerNavigator from "./DrawerNavigator";

const makeMainNavigator = initialRouteName => {
  return createStackNavigator(
    {
      Welcome: { screen: WelcomeScreen },
      DadosBancarios: {screen: DadosBancariosScreen},
      Main: {
        screen: DrawerNavigator
      }
    },
    {
      initialRouteName,
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
      MainNavigator: makeMainNavigator("Welcome")
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
