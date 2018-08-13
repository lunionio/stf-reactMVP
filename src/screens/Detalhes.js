import React, { Component } from "react";
import styled from "styled-components/native";
import TextLabel from "../components/TextLabel";
import Spacer from "../components/Spacer";
import { connect } from "react-redux";
import { workHelper } from "../lib/workHelper";
import workActions from "../actions/workActions/actions";
import { Header} from 'react-native-elements';
import {colors} from '../utils/constants';
import { BackIcon } from "../components/icons";
import {IconLogo} from "../components";

const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: white;
`;
const MasterContent = styled.View`
  flex: 1;
  margin-left: 0px;
  margin-right: 0px;
`;  

const Content = styled.View`
  flex: 1;
  flex-direction: column;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 20px;
  background-color: white;
`;

const EventTitleContent = styled.View`
  flex: 1;
  min-height: 68;
  max-height: 68;
  background-color: #eaebed;
  width: 100%;
`;

const EventTitleTextContent = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  padding: 10px;
  flex-direction: row;
  position: absolute;
`;

const EventSubTitleTextContent = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  padding: 10px;
`;

const Icon = styled.Image`
  min-width: 20;
  min-height: 20;
  max-width: 20;
  max-height: 20;
  resize-mode: contain;
  margin-right: 5px;
`;

const JobTitleContent = styled.View`
  flex: 1;
  min-height: 68;
  max-height: 68;
  width: 100%;
  flex-direction: row;
`;

const JobTitleFunctionContent = styled.View`
  flex: 1;
  min-height: 68;
  max-height: 68;
  background-color: #eaebed;
  min-width: 60%;
  max-width: 60%;
  align-items: center;
  flex-direction: row;
`;

const JobTitleTextContent = styled.View`
  flex: 1;
  min-height: 68;
  max-height: 68;
  min-width: 60%;
  max-width: 60%;
  margin-left: 5;
  align-items: center;
`;

const JobIcon = styled.Image`
  min-width: 40;
  min-height: 40;
  max-width: 40;
  max-height: 40;
  resize-mode: contain;
  margin-left: 10px;
  margin-right: 5px;
`;

const JobTitleValueContent = styled.View`
  flex: 1;
  min-height: 68;
  max-height: 68;
  background-color: #eaebed;
  width: 30%;
  margin-left: 10px;
`;

const DataTitleContent = styled.View`
  flex: 1;
  min-height: 68;
  max-height: 68;
  width: 100%;
  flex-direction: row;
`;

const DataTitleLeftContent = styled.View`
  flex: 1;
  min-height: 68;
  max-height: 68;
  width: 50%;
  background-color: #eaebed;
  margin-right: 5px;
  align-items: center;
`;

const DataTitleRightContent = styled.View`
  flex: 1;
  min-height: 68;
  max-height: 68;
  width: 50%;
  background-color: #eaebed;
  margin-left: 5px;
  align-items: center;
`;

const MapTitleContent = styled.View`
  flex: 1;
  min-height: 30;
  max-height: 30;
  width: 100%;
  flex-direction: row;
  padding-bottom: 3px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.4);
  align-items: center;
`;

const MapContent = styled.View`
  flex: 1;
  min-height: 120;
  max-height: 120;
  width: 100%;
  background-color: gray;
  align-items: center;
`;

const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  min-width: 100%;
  max-width: 100%;
  min-height: 46px;
  max-height: 46px;
`;

const ApplyJobButton = styled.View`
  flex: 1;
  min-width: 100%;
  max-width: 100%;
  min-height: 46px;
  max-height: 46px;
  background-color: green;
  justify-content: center;
  align-items: center;
`;

class DetalheScreen extends Component {
  render() {
    return (
      <MasterContent>
         <Header
      placement="left"
      backgroundColor={colors.BASE}
      leftComponent={ <BackIcon onPress={() => this.props.navigation.navigate("Main")} />}
      centerComponent={<IconLogo/> } 
      />       
      <ScrollView>
        <Content>
          <EventTitleContent>
            <EventTitleTextContent>
              <Icon source={require(".././assets/images/ic_world.png")} />
              <TextLabel
                fontSize={12}
                color={"rgba(0,0,0,0.4)"}
                label={"teste"}
              />
            </EventTitleTextContent>
            <EventSubTitleTextContent>
              <TextLabel fontSize={18} color={"red"} label={"teste"} />
            </EventSubTitleTextContent>
          </EventTitleContent>
          <Spacer min={10} max={10} />
          <JobTitleContent>
            <JobTitleFunctionContent>
              <JobIcon source={require(".././assets/images/ic_work.png")} />
              <JobTitleTextContent>
                <EventTitleTextContent>
                  <TextLabel
                    fontSize={12}
                    color={"rgba(0,0,0,0.4)"}
                    label={"Funcão"}
                  />
                </EventTitleTextContent>
                <EventSubTitleTextContent>
                  <TextLabel fontSize={23} color={"red"} label={"Garcom"} />
                </EventSubTitleTextContent>
              </JobTitleTextContent>
            </JobTitleFunctionContent>
            <JobTitleValueContent>
              <EventTitleTextContent>
                <Icon source={require(".././assets/images/ic_money.png")} />
              </EventTitleTextContent>
              <EventSubTitleTextContent>
                <TextLabel fontSize={18} color={"red"} label={"200,00"} />
              </EventSubTitleTextContent>
            </JobTitleValueContent>
          </JobTitleContent>
          <Spacer min={10} max={10} />
          <DataTitleContent>
            <DataTitleLeftContent>
              <EventTitleTextContent>
                <Icon source={require(".././assets/images/ic_calendar.png")} />
              </EventTitleTextContent>
              <EventSubTitleTextContent>
                <TextLabel fontSize={18} color={"red"} label={"08/09"} />
              </EventSubTitleTextContent>
            </DataTitleLeftContent>
            <DataTitleRightContent>
              <EventTitleTextContent>
                <Icon source={require(".././assets/images/ic_cl.png")} />
              </EventTitleTextContent>
              <EventSubTitleTextContent>
                <TextLabel fontSize={18} color={"red"} label={"22:30"} />
              </EventSubTitleTextContent>
            </DataTitleRightContent>
          </DataTitleContent>
          <Spacer min={10} max={10} />
          <MapTitleContent>
            <Icon source={require(".././assets/images/ic_location.png")} />
            <TextLabel
              fontSize={18}
              color={"red"}
              label={"Mapa para localizacão"}
            />
          </MapTitleContent>
          <Spacer min={5} max={5} />
          <MapContent />
          <Spacer min={10} max={10} />
          <EventTitleContent>
            <EventTitleTextContent>
              <TextLabel
                fontSize={12}
                color={"rgba(0,0,0,0.4)"}
                label={"Endereco"}
              />
            </EventTitleTextContent>
            <EventSubTitleTextContent>
              <TextLabel fontSize={18} color={"red"} label={"A Confirmar"} />
            </EventSubTitleTextContent>
          </EventTitleContent>
          <Spacer min={10} max={10} />
          <DataTitleContent>
            <DataTitleLeftContent>
              <EventTitleTextContent>
                <TextLabel
                  fontSize={12}
                  color={"rgba(0,0,0,0.4)"}
                  label={"Observacões"}
                />
              </EventTitleTextContent>
              <EventSubTitleTextContent>
                <TextLabel fontSize={18} color={"red"} label={""} />
              </EventSubTitleTextContent>
            </DataTitleLeftContent>
            <DataTitleRightContent>
              <EventTitleTextContent>
                <TextLabel
                  fontSize={12}
                  color={"rgba(0,0,0,0.4)"}
                  label={"CEP"}
                />
              </EventTitleTextContent>
              <EventSubTitleTextContent>
                <TextLabel fontSize={18} color={"red"} label={"A Confirmar"} />
              </EventSubTitleTextContent>
            </DataTitleRightContent>
          </DataTitleContent>
          <Spacer min={10} max={10} />
          <TouchableOpacity
            onPress={() => {
              workHelper.openWork(this.props.workActions);
            }}
          >
            <ApplyJobButton>
              <TextLabel
                fontSize={14}
                color={"white"}
                label={"QUERO ME CANDIDATAR"}
              />
            </ApplyJobButton>
          </TouchableOpacity>
        </Content>
      </ScrollView>
      </MasterContent>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetalheScreen);
