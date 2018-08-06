import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {TextLabel, Spacer} from "../components";
import { ListItem, Button, Icon } from 'react-native-elements';

const Content = styled.View`
background: #ffffff;
flex: 1;
padding-top: 10;
flex-direction: column;
padding-left: 20;
padding-right:20;
justify-content: flex-start;
align-items: flex-start;
`;
const ContainerListiew = styled.View`
  margin-top:10;    
  min-width: 100%; 
  max-width: 100%;  
`;

const ContainerButton = styled.View`
margin-top:30;
align-self: center;
`
const ButtonSair = styled.View`
background: "transparent",
width: 300,
border-color: "transparent"   
`;

const list = [
  {
    title: 'Perfil'    
  },
  {
    title: 'Área de atuação'   
  },
  {
    title: 'Dados bancários'   
  },
  {
    title: 'Documentação'   
  },
  {
    title: 'Currículo'   
  },
  {
    title: 'Formação acadêmica'   
  },
  {
    title: 'Redefinir senha'   
  }
]

class PerfilScreen extends Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Content>       
           <TextLabel fontWeight={800} textAling={'flex-start'} fontSize={28} color={"#000000"} label={"CONTA"} />
      <ContainerListiew>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              onPress={() =>
                navigate('DadosBancarios') // TODO adicionar as outras telas
              }
            />
          ))
        }
      </ContainerListiew>
      <Spacer min={30} max={30}/>
      <TextLabel fontWeight={800} textAling={'flex-start'} fontSize={28} color={"#000000"} label={"PREFERÊNCIAS"} />
      <ContainerListiew>
      <ListItem
              key={1}
              title="Notificações"
              onPress={() =>
                navigate('Welcome') // TODO adicionar as outras telas
              }
            />
      </ContainerListiew>
      <ContainerButton>
        <Button
        buttonStyle={ButtonSair}
        icon={
          <Icon
            name='exit'
            size={15}
            color='#000000'
          />
        }
        title='Sair'
      />
      </ContainerButton>
      
      </Content>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    info: state.info
  };
};

const mapDispatchToProps = dispatch => {
  return {
    workActions: type => dispatch(workActions(type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PerfilScreen
);
