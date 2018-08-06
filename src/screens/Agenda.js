import React, { Component } from "react";
import styled from "styled-components/native";
import { StyleSheet, View } from "react-native";
import { Agenda, LocaleConfig } from "react-native-calendars";
import HistoryEventCard from "../components/HistoryEventCard";
import Spacer from "../components/Spacer";

LocaleConfig.locales['br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar.','Abr.','Mai.','Jun.','Jul.','Ago.','Set.','Out.','Nov.','Dez.'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'],
  dayNamesShort: ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sab.']
};

LocaleConfig.defaultLocale = 'br';


const itemDateMock = {
  "2018-08-05": [
    {
      name: "Festival de Rock",
      hour: "21:30",
      address: "São Paulo",
      value: 150.0,
      job: "Cozinheiro",
      date: "DOM 05 AGO",
      status: "pendente"
    },
    {
      name: "Aniversaio",
      hour: "12:30",
      address: "São Paulo",
      value: 100.0,
      job: "Palhaço",
      date: "DOM 05 AGO",
      status: "pendente"
    }
  ],
  "2018-08-06": [
    {
      name: "Evento 12",
      hour: "22:30",
      address: "São Paulo",
      value: 250.0,
      job: "Garcom",
      date: "SEG 06 AGO",
      status: "confirmado"
    }
  ],
  "2018-08-10": [
    {
      name: "Festa do Arooz",
      hour: "22:30",
      address: "São Paulo",
      value: 150.0,
      job: "Garcom",
      date: "QUI 10 AGO",
      status: "confirmado"
    }
  ]
};

const ContainerView = styled.View`flex: 1;`;

const Content = styled.View`
  padding-left: 10;
  padding-right: 10;
`;

const ScrollView = styled.ScrollView``;

class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: itemDateMock
    };
  }

  renderItem(item) {
    if (!item) return;
    return (
      <Content>
        <HistoryEventCard data={item} />
      </Content>
    );
  }

  render() {
    return (
      <ContainerView>
        <ScrollView>
          <View style={styles.sebc486e1}>
            <Agenda
              items={this.state.items}   
              rowHasChanged={(r1, r2) => {
                return r1.text !== r2.text;
              }}          
              renderItem={this.renderItem.bind(this)}
              renderEmptyDate={() => {
                return <View />;
              }}
              hideKnob={true}
              selected={"2018-08-05"}
              theme={{
                calendarBackground: "#ff4910",
                agendaKnobColor: "rgba(0,0,0,0.4)",
                agendaDayTextColor: '#ffffff',
                agendaDayNumColor: '#ffffff',
                agendaTodayColor: '#ffffff',
                dotColor: 'red',
                selectedDotColor: '#ffffff',
                textSectionTitleColor: '#ffffff',
                arrowColor: 'orange',
                textMonthFontWeight: 'bold',
                selectedDayBackgroundColor: '#be2f02',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#be2f02',
                dayTextColor: '#ffffff',
                monthTextColor: '#ffffff',
                textDayFontSize: 20,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16               
                
              }}
              renderDay={(day, item) => {}}
            />
          </View>
          <Spacer min={20} max={20} />
        </ScrollView>
      </ContainerView>
    );
  }
}

const styles = StyleSheet.create({    
  sebc486e1: {
    flex: 1,
    alignItems: `flex-start`,
    justifyContent: `center`,
    flexDirection: `row`
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

export default AgendaScreen;
