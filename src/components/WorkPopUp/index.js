import React from "react";
import styled from "styled-components";
import { workHelper } from "../../lib/workHelper";
import TextLabel from "../TextLabel";
import Spacer from "../Spacer";

const WorkPopUpContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 5;
  elevation: 5;
  background-color: rgba(0, 0, 0, 0.7);
`;

const WorkPopUpContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const WorkPopUpConfirmContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: 20;
  padding-right: 20;
  min-width: 80%;
  min-height: 25%;
  max-width: 80%;
  max-height: 25%;
  background-color: white;
  margin-bottom: 30;
`;

const WorkPopUpImage = styled.Image`
  flex: 1;
  min-width: 55;
  min-height: 55;
  max-width: 55;
  max-height: 55;
  resize-mode: contain;
`;

const TouchableOpacity = styled.TouchableOpacity``;

const WorkPopUpButton = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 80%;
  max-width: 80%;
  min-height: 55;
  max-height: 55;
  background-color: ${props => props.backgroundColor};
`;

const InfosIcon = styled.Image`
  min-width: 15;
  min-height: 15;
  max-width: 15;
  max-height: 15;
  resize-mode: contain;
  ${props => {
    if (props.marginRight) `margin-right: ${props.marginRight}`;
  }};
  ${props => {
    if (props.marginLeft) `margin-left: ${props.marginLeft}`;
  }};
`;

const WorkPopUpSucessContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WorkPopUpSucessImage = styled.Image`
  flex: 1;
  min-width: 300;
  min-height: 400;
  max-width: 300;
  max-height: 400;
  resize-mode: contain;
  position: absolute;
`;

const WorkPopUpSucessContent = styled.View`
  flex: 1;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  min-width: 300;
  min-height: 400;
  max-width: 300;
  max-height: 400;
`;

const WorkPopUpSucessTitle = styled.View`
  flex: 1;
  max-height: 16;
  align-items: center;
  justify-content: center;
`;

const WorkPopUpSucessInfoContent = styled.View`
  flex: 1;
  flex-direction: row;
`;

const WorkPopUpSucessInfoContentLeft = styled.View`
  flex: 1;
  flex-direction: column;
  width: 50%;
`;

const WorkPopUpSucessInfoContentRight = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`;

const InfosIconSuccess = styled.Image`
  min-width: 55;
  min-height: 55;
  max-width: 55;
  max-height: 55;
  resize-mode: contain;
`;

const CloseSucessButton = styled.Image`
  min-width: 90;
  min-height: 95;
  max-width: 95;
  max-height: 95;
  resize-mode: contain;
`;

const WorkPopUp = ({ workActions, workData }) => {
  return (
    <WorkPopUpContainer>
      {workData.show && !workData.workFinished
        ? <WorkPopUpContent>
            <WorkPopUpConfirmContent>
              <WorkPopUpImage
                source={require("../../assets/images/ic_info_alert.png")}
              />
              <Spacer min={10} max={10} />
              <TextLabel
                fontSize={15}
                color={"black"}
                label={"Deseja confirmar a candidatura nessa vaga?"}
              />
            </WorkPopUpConfirmContent>
            <Spacer min={25} max={25} />
            <TouchableOpacity
              onPress={() => workHelper.workFinished(workActions)}
            >
              <WorkPopUpButton backgroundColor={"white"}>
                <TextLabel fontSize={20} color={"green"} label={"CONFIRMAR"} />
                <InfosIcon
                  marginLeft={5}
                  source={require("../../assets/images/ic_check.png")}
                />
              </WorkPopUpButton>
              <Spacer min={10} max={10} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => workHelper.closeWork(workActions)}>
              <WorkPopUpButton backgroundColor={"black"}>
                <InfosIcon
                  marginRight={5}
                  source={require("../../assets/images/ic_back.png")}
                />
                <TextLabel fontSize={20} color={"white"} label={"CANCELAR"} />
              </WorkPopUpButton>
            </TouchableOpacity>
            <Spacer min={10} max={20} />
          </WorkPopUpContent>
        : <WorkPopUpSucessContainer>
            <WorkPopUpSucessContent>
              <WorkPopUpSucessImage
                source={require("../../assets/images/card_confirm.png")}
              />
              <Spacer min={65} max={65} />
              <WorkPopUpSucessTitle>
                <TextLabel
                  fontSize={18}
                  fontWeight={"bold"}
                  color={"white"}
                  label={"PARABÉNS!"}
                />
              </WorkPopUpSucessTitle>
              <Spacer min={5} max={5} />
              <TextLabel
                fontSize={14}
                textAlign={"center"}
                color={"white"}
                label={
                  "Agora é só esperar aprovacão e assim que confirmada, voce receberá mais informacões sobre o evento."
                }
              />
              <Spacer min={50} max={50} />
              <WorkPopUpSucessInfoContent>
                <WorkPopUpSucessInfoContentLeft>
                  <TextLabel
                    fontSize={14}
                    fontWeight={"bold"}
                    color={"#ededed"}
                    label={"DATA"}
                  />
                  <TextLabel
                    fontSize={14}
                    color={"white"}
                    label={"08 de Setembro/2018"}
                  />
                  <Spacer min={5} max={5} />
                  <TextLabel
                    fontSize={14}
                    fontWeight={"bold"}
                    color={"#ededed"}
                    label={"LOCAL"}
                  />
                  <TextLabel
                    fontSize={14}
                    color={"white"}
                    label={"São Paulo/SP"}
                  />
                  <Spacer min={5} max={5} />
                  <TextLabel
                    fontSize={14}
                    fontWeight={"bold"}
                    color={"#ededed"}
                    label={"VALOR"}
                  />
                  <TextLabel
                    fontSize={20}
                    color={"white"}
                    label={"R$ 250,00"}
                  />
                </WorkPopUpSucessInfoContentLeft>
                <WorkPopUpSucessInfoContentRight>
                  <TextLabel
                    fontSize={14}
                    fontWeight={"bold"}
                    color={"#ededed"}
                    label={"HORARIO"}
                  />
                  <TextLabel fontSize={14} color={"white"} label={"22:30"} />
                  <Spacer min={10} max={10} />
                  <InfosIconSuccess
                    source={require("../../assets/images/ic_work_confirm.png")}
                  />
                  <Spacer min={5} max={5} />
                  <TextLabel
                    fontSize={14}
                    fontWeight={"bold"}
                    color={"#ededed"}
                    label={"FUNCAO"}
                  />
                  <TextLabel fontSize={14} color={"white"} label={"Garcom"} />
                </WorkPopUpSucessInfoContentRight>
              </WorkPopUpSucessInfoContent>
            </WorkPopUpSucessContent>
            <TouchableOpacity onPress={() => workHelper.closeWork(workActions)}>
              <CloseSucessButton
                source={require("../../assets/images/close_confirm_button.png")}
              />
            </TouchableOpacity>
          </WorkPopUpSucessContainer>}
    </WorkPopUpContainer>
  );
};

export default WorkPopUp;
