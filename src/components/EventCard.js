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

const ItemContentInfos = styled.View`
  flex: 1;
  flex-direction: row;
`;

const InfosContent = styled.View`
  flex: 1;
  margin-top: 5;
  padding-left: 5;
  min-width: 60%;
  max-width: 60%;
`;

const InfosItem = styled.View`
  flex: 1;
  flex-direction: row;
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
  render() {
    return (
      <Content>
        <ItemContent>
          <ItemContentData>
            <TextLabel fontSize={24} color={"red"} label={"TER"} />
            <TextLabel fontSize={24} color={"black"} label={"03"} />
            <TextLabel fontSize={24} color={"red"} label={"SET"} />
          </ItemContentData>
          <ItemContainerInfos>
            <TextLabel fontSize={23} color={"red"} label={"TITULO_EVENTO"} />
            <ItemContentInfos>
              <InfosContent>
                <InfosItem>
                  <InfosIcon
                    source={require(".././assets/images/ic_location.png")}
                  />
                  <TextLabel fontSize={12} color={"black"} label={"LOCAL"} />
                </InfosItem>
                <InfosItem>
                  <InfosIcon
                    source={require(".././assets/images/ic_clock.png")}
                  />
                  <TextLabel fontSize={12} color={"black"} label={"HORA"} />
                </InfosItem>
                <InfosItem>
                  <InfosIcon
                    source={require(".././assets/images/ic_money.png")}
                  />
                  <TextLabel fontSize={12} color={"black"} label={"VALOR"} />
                </InfosItem>
              </InfosContent>
              <ImageContainer>
                <ImageInfoContent>
                  <ImageContent>
                    <Image source={require(".././assets/images/ic_work.png")} />
                  </ImageContent>
                </ImageInfoContent>
                <ImageTextContent>
                  <TextLabel fontSize={14} color={"black"} label={"ICON"} />
                </ImageTextContent>
              </ImageContainer>
            </ItemContentInfos>
          </ItemContainerInfos>
        </ItemContent>
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
                label={`ME${"\n"}CANDIDATAR`}
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
                label={`MAIS${"\n"}INFORMAÇÕES`}
              />
            </ButtonContent>
          </TouchableOpacity>
        </FooterButtonContent>
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
