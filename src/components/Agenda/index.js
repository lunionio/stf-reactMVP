import React, { Component } from "react";
import styled from "styled-components";
import TextLabel from "../TextLabel";

const daysMock = {
  data: [
    {
      id: 1,
      day: "01/07/2018",
      event: [
        {
          event_name: "teste",
          event_desc: "zzz"
        }
      ]
    },
    {
      id: 2,
      day: "04/07/2018",
      event: [
        {
          event_name: "teste",
          event_desc: "zzz"
        }
      ]
    },
    {
      id: 3,
      day: "01/07/2018",
      event: [
        {
          event_name: "teste",
          event_desc: "zzz"
        }
      ]
    },
    {
      id: 4,
      day: "05/07/2018",
      event: [
        {
          event_name: "teste",
          event_desc: "zzz"
        }
      ]
    }
  ]
};

const Content = styled.View`
  flex: 1;
  max-height: 56;
  min-height: 56;
`;

const Agenda = () => {
  return (
    <Content>
      <TextLabel label={"bla"} />
    </Content>
  );
};

export default Agenda;
