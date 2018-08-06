import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import TextLabel from "../components/TextLabel";
import workActions from "../actions/workActions/actions";
import { workHelper } from "../lib/workHelper";

const TouchableOpacity = styled.TouchableOpacity``;

const Content = styled.View`
  flex: 1;
  height: 200;
  flex-direction: column;
  background-color: #ededed;
  margin-top: 15;
  margin-left: 4;
  margin-right: 4;
  border-width: 1.5;
  border-color: rgba(0, 0, 0, 0.5);
`;

const ItemContent = styled.View`
  flex: 1;
  min-height: 150;
  max-height: 150;
  flex-direction: row;
`;

const ItemContentData = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 30%;
  max-width: 30%;
  background-color: #ededed;
`;

const ItemContainerInfos = styled.View`
  flex: 1;
  background-color: #ededed;
  border-left-width: 2;
  border-left-color: #9d9d9d;
  margin-top: 10;
  padding-left: 2;
`;

class Documentacao extends Component {
  render() {
    return (
      <Content>       
        
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

export default connect(mapStateToProps, mapDispatchToProps)(Documentacao);
