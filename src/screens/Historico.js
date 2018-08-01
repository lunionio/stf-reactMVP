import React, { Component } from "react";
import styled from "styled-components/native";
import HistoryEventCard from "../components/HistoryEventCard";

const Content = styled.View`
  flex: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-left: 4;
  margin-right: 4;
  align-items: center;
`;

class HistoricoScreen extends Component {
  render() {
    return (
      <Content>
        <HistoryEventCard />
      </Content>
    );
  }
}

export default HistoricoScreen;
