import React, { Component } from 'react';
import styled from 'styled-components/native';
import {TextLabel, Spacer} from "../components";


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

const InputText = styled.TextInput`
  flex: 1;
  font-size: 15;
  min-height: 40;
  max-height: 40;
  margin-left: 0; 
`;

const InputTextContent = styled.View`
  flex: 1;
  min-height: 40;
  max-height: 40;
  flex-direction: row;
  align-items: center;
  min-width: 100%;
  max-width: 100%;
  padding-left: 15;
  padding-right: 15;
  border-width: 1;
  border-color: #9d9d9d; 
`;
class DadosBancariosScreen extends Component {
  render() {
    return (
      <Content>          
           <TextLabel fontWeight={800} textAling={'flex-start'} fontSize={28} color={"#000000"} label={"DADOS DO TITULAR"} />
           <Spacer min={10} max={10}/>
           <TextLabel textAling={'flex-start'} fontSize={16} fontWeight={600} color={"#000000"} label={"Nome completo"} />
           <InputTextContent>
           <InputText
                placeholderTextColor={"grey"}
                placeholder="padilha junior"
                multiline={false}
                numberOfLines={1}
                underlineColorAndroid="transparent"
                autoCapitalize={"none"}               
              />
                </InputTextContent>
                <Spacer min={10} max={10}/>
           <TextLabel fontWeight={600} textAling={'flex-start'} fontSize={16} color={"#000000"} label={"CPF"} />
           <InputTextContent>
           <InputText
                placeholderTextColor={"grey"}
                placeholder="123.123.123-33"
                multiline={false}
                numberOfLines={1}
                underlineColorAndroid="transparent"
                autoCapitalize={"none"}               
              />
                </InputTextContent>
                <Spacer min={10} max={10}/>
                <TextLabel fontWeight={800} textAling={'flex-start'} fontSize={28} color={"#000000"} label={"DADOS DA CONTA"} />
           <Spacer min={10} max={10}/>
           <TextLabel textAling={'flex-start'} fontSize={16} fontWeight={600} color={"#000000"} label={"Tipo"} />
           <InputTextContent>
           <InputText
                placeholderTextColor={"grey"}
                placeholder="padilha junior"
                multiline={false}
                numberOfLines={1}
                underlineColorAndroid="transparent"
                autoCapitalize={"none"}               
              />
                </InputTextContent>
                <Spacer min={10} max={10}/>
           <TextLabel fontWeight={600} textAling={'flex-start'} fontSize={16} color={"#000000"} label={"CPF"} />
           <InputTextContent>
           <InputText
                placeholderTextColor={"grey"}
                placeholder="123.123.123-33"
                multiline={false}
                numberOfLines={1}
                underlineColorAndroid="transparent"
                autoCapitalize={"none"}               
              />
                </InputTextContent>
      </Content>
    );
  }
}

export default DadosBancariosScreen;
