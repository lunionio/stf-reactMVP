import React, { Component } from "react";
import { ScrollView,FlatList } from "react-native";
import styled from "styled-components";
import { EventCard } from "../components/";
import { connect } from "react-redux";

const Content = styled.View`
background: #ffffff;
`;

class OportunidadesScreen extends Component {

 state = {
    objEvento : [{}]
    
    
  };

   componentDidMount() {
            fetch('http://seguranca.mundowebpix.com.br:5300/api/seguranca/WpOportunidades/BuscarOportunidades/1/999')
                .then(resposta => resposta.json())
                .then(json => this.setState({objEvento: json}));
        }
  render() {
    return (
      <Content>
        <ScrollView>
           <FlatList 
                    keyExtractor={item => item.id}
                    data={this.state.objEvento}
                    renderItem={ ({item}) =>
                        <EventCard />
                    }
            />
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
