import React, { Component } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { EventCard } from "../components/";
import { connect } from "react-redux";

const Content = styled.View`
background: #ffffff;
`;

class OportunidadesScreen extends Component {
  render() {
    return (
      <Content>
        <ScrollView>
          <EventCard />
          <EventCard />
          <EventCard />
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
