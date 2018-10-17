import React, { Component } from 'react'
import { View, Text,Button } from "react-native";
import GenerateForm from 'react-native-form-builder';
import styled from "styled-components/native";
import Spacer from "../../components/Spacer";	

const ContainerView = styled.View`
  flex: 1;
  align-items: center;
`;

const ViewCont= styled.View`
 flex: 0;
  align-items: center;
  background: #EFEFEF;
  min-width: 91%;
  min-height: 100%;
`;
const ButtonContainer = styled.View``;


const fields = [
  {
    type: 'text',
    name: 'nome',
    required: true,
    label: 'Nome',
  },
   {
    type: 'text',
    name: 'sobreNome',
    required: true,
    label: 'Sobrenome',
  },
  {
    type: 'text',
    name: 'login',
    required: true,
    label: 'Email',
  },
  {
  	type: 'password',
    name: 'senha',
    required: true,
    label: 'Senha',
  },
];
export default class componentName extends Component {
	login() {
    const formValues = this.formGenerator.getValues();
    console.log('FORM VALUES', formValues);
	let usuario =
	{
		"ID": 0,
		"idCliente":2,
		"Nome":formValues.nome,
		"Login":formValues.login,
		"Senha":formValues.senha,
		"UsuarioCriacao": 1,
		"UsuarioEdicao": 1,
		"Ativo":true
    }

	fetch('http://seguranca.mundowebpix.com.br:5300/api/seguranca/Principal/loginUsuario/1/999', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(objUsuario),
    }).then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.id != 0){
        viewObj.props.navigation.navigate("Main")
      }else{
        Alert.alert("Usuario ou senha incorretos")
      }
    })
    .catch((error) => {
      console.error(error);
    });


}
  render() {
	  const { navigate } = this.props.navigation;
	return (
	<View>
		<Spacer min={60} max={60} />
		
		<View>
			<GenerateForm
            ref={(c) => {
              this.formGenerator = c;
            }}
            fields={fields}
          />
		</View>
		<View>
			<Button onPress={() => this.login()} title="Cadastar" />
		</View>
	</View>
	)
  }
} 