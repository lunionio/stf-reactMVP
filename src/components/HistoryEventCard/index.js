import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import TextLabel from "../TextLabel";

const TouchableOpacity = styled.TouchableOpacity``;

const Content = styled.View`
  flex: 1;
  min-width: 100%;
  max-width: 100%;
  min-height: 200;
  max-height: 200;
  flex-direction: row;
  background-color: #ededed;
  margin-top: 15;
  border-width: 1.5;
  border-color: rgba(0, 0, 0, 0.5);
`;

const ItemContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const ItemContent = styled.View`
  flex: 1;
  flex-direction: row;
  max-height: 150;
  min-height: 150;
`;

const ItemContentLeftIndicator = styled.View`
  flex: 1;
  min-width: 10;
  max-width: 10;
  background: green;
  flex-direction: row;
`;

const ItemContentData = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 20%;
  max-width: 20%;
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

const ItemContentRightButton = styled.View`
  flex: 1;
  min-width: 35;
  max-width: 35;
  background: red;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const ContentStatusText = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const InfosIconStatus = styled.Image`
  min-width: 15;
  min-height: 15;
  max-width: 15;
  max-height: 15;
  resize-mode: contain;
  margin-left: 5;
`;

const IconButtonInfo = styled.Image`
  min-width: 20;
  min-height: 20;
  max-width: 20;
  max-height: 20;
  resize-mode: contain;
`;

class HistoryEventCard extends Component {
  render() {
    return (
      <Content>
        <ItemContentLeftIndicator />
        <ItemContainer>
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
                      source={require("../../assets/images/ic_location.png")}
                    />
                    <TextLabel fontSize={12} color={"black"} label={"LOCAL"} />
                  </InfosItem>
                  <InfosItem>
                    <InfosIcon
                      source={require("../../assets/images/ic_clock.png")}
                    />
                    <TextLabel fontSize={12} color={"black"} label={"HORA"} />
                  </InfosItem>
                  <InfosItem>
                    <InfosIcon
                      source={require("../../assets/images/ic_money.png")}
                    />
                    <TextLabel fontSize={12} color={"black"} label={"VALOR"} />
                  </InfosItem>
                </InfosContent>
                <ImageContainer>
                  <ImageInfoContent>
                    <ImageContent>
                      <Image
                        source={require("../../assets/images/ic_work.png")}
                      />
                    </ImageContent>
                  </ImageInfoContent>
                  <ImageTextContent>
                    <TextLabel fontSize={14} color={"black"} label={"ICON"} />
                  </ImageTextContent>
                </ImageContainer>
              </ItemContentInfos>
            </ItemContainerInfos>
          </ItemContent>
          <ContentStatusText>
            <TextLabel
              fontSize={14}
              color={"green"}
              fontWeight={"bold"}
              label={"CONFIRMADO"}
            />
            <InfosIconStatus
              source={require("../../assets/images/ic_card_check.png")}
            />
          </ContentStatusText>
        </ItemContainer>
        <ItemContentRightButton>
          <IconButtonInfo
            source={require("../../assets/images/ic_card_button_arrow.png")}
          />
        </ItemContentRightButton>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryEventCard);
