import React, { Component } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { EventCard } from "../components/";
import { connect } from "react-redux";

const itemDateMock = [
  {
    name: "show do pericles",
    hour: "21:30",
    address: "São Paulo",
    value: 150.0,
    job: "Cozinheiro",
    date: "DOM 05 AGO",
    status: "pago"
  },
  {
    name: "show do thiaguinho",
    hour: "22:30",
    address: "São Paulo",
    value: 250.0,
    job: "Garcom",
    date: "SEG 06 AGO",
    status: "pendente"
  },
  {
    name: "show do thiaguinho 2",
    hour: "22:40",
    address: "São Paulo",
    value: 350.0,
    job: "Garcom",
    date: "SEG 08 AGO",
    status: "recusado"
  }
];

const Content = styled.View``;

class OportunidadesScreen extends Component {
  state = {
    options: itemDateMock
  };
  renderOptions(item, key) {
    return (
      <EventCard
        navigate={this.props.navigation.navigate}
        data={item}
        key={key}
      />
    );
  }
  render() {
    return (
      <Content>
        <ScrollView>
          {this.state.options.map((item, key) => this.renderOptions(item, key))}
        </ScrollView>
      </Content>
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
  OportunidadesScreen
);
