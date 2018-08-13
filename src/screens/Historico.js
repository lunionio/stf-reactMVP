import React, { Component } from "react";
import styled from "styled-components/native";
import HistoryEventCard from "../components/HistoryEventCard";
import Spacer from "../components/Spacer";
import TextLabel from "../components/TextLabel";

const itemDateMock = [
  {
    name: "show do pericles",
    hour: "21:30",
    address: "São Paulo",
    value: 150.0,
    job: "Cozinheiro",
    date: "DOM 05 AGO",
    status: "pago"
  },
  {
    name: "show do thiaguinho",
    hour: "22:30",
    address: "São Paulo",
    value: 250.0,
    job: "Garcom",
    date: "SEG 06 AGO",
    status: "pendente"
  },
  {
    name: "show do thiaguinho 2",
    hour: "22:40",
    address: "São Paulo",
    value: 350.0,
    job: "Garcom",
    date: "SEG 08 AGO",
    status: "recusado"
  }
];

const historyOptions = [
  {
    name: "TODOS",
    id: 1
  },
  {
    name: "PAGO",
    id: 2
  },
  {
    name: "PENDENTE",
    id: 3
  },
  {
    name: "RECUSADO",
    id: 4
  }
];

const Content = styled.View`flex: 1;`;

const AmmountContent = styled.View`
  flex: 1;
  min-width: 100%;
  max-width: 100%;
  min-height: 210px;
  max-height: 210px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AmmountTotalContent = styled.View`
  flex: 1;
  background-color: #4538ed;
  min-width: 330;
  max-width: 330;
  min-height: 75;
  max-height: 75;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-width: 1px;
  border-color: gray;
  border-radius: 8;
`;

const AmmountInfoContent = styled.View`
  flex: 1;
  min-width: 100%;
  max-width: 100%;
  min-height: 75px;
  max-height: 75px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 5px;
`;

const AmmountInfoReceivedContent = styled.View`
  flex: 1;
  min-height: 85px;
  max-height: 85px;
  min-width: 160;
  max-width: 160;
  overflow: hidden;
  justify-content: center;
  margin: 5px;
`;

const AmmountInfoContentText = styled.View`
  flex: 1;
  min-height: 100%;
  max-height: 100%;
  min-width: 100%;
  max-width: 100%;
  margin-left: 5px;
  justify-content: center;
`;

const AmmountInfoImage = styled.Image`
  flex: 1;
  min-width: 160;
  min-height: 75;
  max-width: 160;
  max-height: 75;
  position: absolute;
  resize-mode: contain;
`;

const AmmountInfoPendingContent = styled.View`
  flex: 1;
  min-height: 85px;
  max-height: 85px;
  min-width: 160;
  max-width: 160;
  margin: 5px;
  overflow: hidden;
  justify-content: center;
`;

const ItemContent = styled.View`
  flex: 1;
  padding-left: 10;
  padding-right: 10;
  min-width: 100%;
  max-width: 100%;
  min-height: 200;
  max-height: 200;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
  padding-left: 10;
  padding-right: 10;
`;

const AmmountTitleContent = styled.View`
  flex: 1;
  max-height: 23px;
  min-height: 23px;
  min-width: 330;
  max-width: 330;
  border-bottom-width: 1.5px;
  border-bottom-color: gray;
  flex-direction: row;
`;

const AmmountTitleLeftContent = styled.View`
  flex: 1;
  min-height: 100%;
  max-height: 100%;
  align-items: flex-start;
  justify-content: center;
  min-width: 50%;
  max-width: 50%;
  padding-bottom: 3px;
`;

const AmmountTitleRightContent = styled.View`
  flex: 1;
  min-height: 100%;
  max-height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  min-width: 50%;
  max-width: 50%;
  padding-bottom: 3px;
`;

const HistoryOptionsContent = styled.View`
  flex: 1;
  min-height: 38;
  max-height: 38;
  max-width: 100%;
  border-width: 1.5;
  border-color: red;
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
`;

const HistoryOptionsItemContent = styled.View`
  flex: 1;
  min-height: 100%;
  max-height: 100%;
  min-width: 100%;
  max-width: 100%;
  border-width: 1.5;
  border-color: red;
  justify-content: center;
  align-items: center;
  ${props => {
    if (props.id == props.selectedOption) return "background-color: red";
  }};
`;

const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  min-height: 100%;
  max-height: 100%;
  min-width: 25%;
  max-width: 25%;
`;

class HistoricoScreen extends Component {
  state = {
    items: itemDateMock,
    options: historyOptions,
    selectedOption: 1,
    selectedOptionName: "Todos"
  };

  renderItem(item, key) {
    return <HistoryEventCard key={key} data={item && item} />;
  }

  renderOptions(item, key) {
    return (
      <TouchableOpacity
        key={key}
        onPress={() =>
          this.setState({
            selectedOption: item.id,
            selectedOptionName: item.name
          })}
      >
        <HistoryOptionsItemContent
          id={item.id}
          selectedOption={this.state.selectedOption}
        >
          <TextLabel
            fontWeight={"bold"}
            fontSize={13}
            label={item.name}
            color={item.id == this.state.selectedOption ? "white" : "black"}
          />
        </HistoryOptionsItemContent>
      </TouchableOpacity>
    );
  }

  verifyItemRendering(item) {
    switch (item) {
      case "pago":
        if (this.state.selectedOption == 2) return item;
        return false;
      case "pendente":
        if (this.state.selectedOption == 3) return item;
        return false;
      case "recusado":
        if (this.state.selectedOption == 4) return item;
        return false;
    }
  }

  render() {
    return (
      <Content>
        <ScrollView>
          <Spacer min={10} max={10} />
          <AmmountContent>
            <AmmountTitleContent>
              <AmmountTitleLeftContent>
                <TextLabel
                  fontSize={16}
                  label={"Balanco Mensal"}
                  color={"gray"}
                />
              </AmmountTitleLeftContent>
              <AmmountTitleRightContent>
                <TextLabel
                  fontSize={12}
                  label={"Eventos no mes 08"}
                  color={"gray"}
                />
              </AmmountTitleRightContent>
            </AmmountTitleContent>
            <Spacer min={10} max={10} />
            <AmmountTotalContent>
              <TextLabel fontSize={14} label={"VALOR TOTAL"} color={"white"} />
              <TextLabel fontSize={23} label={"R$ 14.000,00"} color={"white"} />
            </AmmountTotalContent>
            <AmmountInfoContent>
              <AmmountInfoReceivedContent>
                <AmmountInfoImage
                  source={require("../assets/images/ic_ammount_received.png")}
                />
                <AmmountInfoContentText>
                  <TextLabel
                    fontSize={10}
                    label={"VALOR RECEBIDO"}
                    color={"black"}
                  />
                  <Spacer min={5} max={5} />
                  <TextLabel
                    fontSize={18}
                    label={"R$ 14.000,00"}
                    color={"white"}
                  />
                </AmmountInfoContentText>
              </AmmountInfoReceivedContent>
              <AmmountInfoPendingContent>
                <AmmountInfoImage
                  source={require("../assets/images/ic_ammount_pending.png")}
                />
                <AmmountInfoContentText>
                  <TextLabel
                    fontSize={10}
                    label={"VALOR RECEBIDO"}
                    color={"black"}
                  />
                  <Spacer min={5} max={5} />
                  <TextLabel
                    fontSize={18}
                    label={"R$ 14.000,00"}
                    color={"white"}
                  />
                </AmmountInfoContentText>
              </AmmountInfoPendingContent>
            </AmmountInfoContent>
          </AmmountContent>
          <Spacer min={10} max={10} />
          <HistoryOptionsContent>
            {this.state.options.map((item, key) =>
              this.renderOptions(item, key)
            )}
          </HistoryOptionsContent>
          <Spacer min={10} max={10} />
          {this.state.items.map((item, key) => {
            const result = this.verifyItemRendering(item.status);

            if (!result && this.state.selectedOption != 1) return;

            if (result == item.status || this.state.selectedOption == 1) {
              return this.renderItem(item, key);
            } else return;
          })}
          <Spacer min={20} max={20} />
        </ScrollView>
      </Content>
    );
  }
}

export default HistoricoScreen;
