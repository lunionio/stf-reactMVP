import React, { Component ,Fragment } from 'react';
import styled from 'styled-components/native';
import { Button, TextInput, StyleSheet, View } from "react-native";
const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.WHITE};
`;

const styles = StyleSheet.create({
  scf3b375b: {
    minWidth: 100,
    backgroundColor: `rgba(48, 19, 191, 1)`,
    flex: 0,
    maxWidth: 100,
    maxHeight: 20,
    minHeight: 20
  },
  s788b2d0e: { flex: 1, backgroundColor: `rgba(223, 223, 223, 1)` },
  sebc486e1: {
    flex: 1,
    alignItems: `flex-start`,
    justifyContent: `center`,
    flexDirection: `row`
  }
});
class AgendaScreen extends Component {
  render() {
    return ( 
      <Fragment>
      <View style={styles.sebc486e1}>
        <View style={styles.s788b2d0e}>
          <Button title={`New Button`} />
          <TextInput style={styles.scf3b375b} />
        </View>
      </View>
    </Fragment>  
    )
  }
}

export default AgendaScreen;
