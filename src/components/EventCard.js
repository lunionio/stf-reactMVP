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
  flex-direction: column;
`;

const ItemContentData = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  max-width: 50%;
  background-color: #ededed;
`;

const ItemContainerInfos = styled.View`
  flex: 1;
  background-color: #ededed;
  margin-top: 10;
  padding-left: 2;
`;

const ItemContentInfos = styled.View`
  flex: 1;
  flex-direction: row;
`;

const InfosContent = styled.View`
  flex: 1;
  margin-top: 5;
  padding-left: 5;
  min-width: 100%;
  max-width: 100%;
`;

const InfosItem = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 5;
  max-height: 25;
  justify-content: flex-start;
  align-items: center;
  border-bottom-color: #9d9d9d;
  border-bottom-width: 1.5;
`;

const InfosIcon = styled.Image`
  min-width: 15;
  min-height: 15;
  max-width: 15;
  max-height: 15;
  resize-mode: contain;
  margin-right: 5;
`;

const ImageContainer = styled.View`
  flex: 1;
  margin-top: 5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageInfoContent = styled.View`flex: 1;`;

const ImageContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  min-width: 80;
  min-height: 80;
  max-width: 80;
  max-height: 80;
  border-width: 1;
  border-radius: 100;
  overflow: hidden;
`;

const Image = styled.Image`
  flex: 1;
  min-width: 55;
  min-height: 55;
  max-width: 55;
  max-height: 55;
  resize-mode: contain;
`;

const ImageTextContent = styled.View`
  top: 10px;
  flex: 1;
  justify-content: center;
`;

const FooterButtonContent = styled.View`
  flex: 1;
  max-width:100%
  min-width:100%
  background-color: pink;
  flex-direction: row;
`;

const ButtonContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  min-width: 50%;
`;

const ImageButton = styled.Image`
  position: absolute;
  flex: 1;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
`;
 

class EventCard extends Component {

 state = {
    datas: "01/08/1993",
    hora: "19:00h",
    vaga: 'garçon',
    valor: '150,00'
  };


  render() {
  const { datas, hora,vaga,valor } = this.state;

    return (
      <Content>
        <ItemContent>
          <ItemContentData>
            <TextLabel fontSize={12} color={"#707070"} label={"Dia " + datas + " as " + hora} />
            <TextLabel fontSize={15} color={"#707070"} label={'Vaga de ' + vaga} />
            <TextLabel fontSize={20} color={"#707070"} label={'R$' + valor} />
          </ItemContentData>
          <ItemContainerInfos>
            <ItemContentInfos>
              <InfosContent>
                {/*Colocar os botoes aqui :)*/}
                <FooterButtonContent>
          <TouchableOpacity
            onPress={() => {
              workHelper.openWork(this.props.workActions);
            }}
          >
            <ButtonContent>
              <ImageButton
                source={require(".././assets/images/botao_quero_candidatar.png")}
              />
              <TextLabel
                textAlign={"center"}
                fontSize={13}
                color={"white"}
              />
            </ButtonContent>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("bla")}>
            <ButtonContent>
              <ImageButton
                source={require(".././assets/images/botao_mais_info.png")}
              />
              <TextLabel
                textAlign={"center"}
                fontSize={13}
                color={"white"}
              />
            </ButtonContent>
          </TouchableOpacity>
        </FooterButtonContent>
              </InfosContent>
            </ItemContentInfos>
          </ItemContainerInfos>
        </ItemContent>
        
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

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);
