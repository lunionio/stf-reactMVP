import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const IconLeftContainer = styled.TouchableOpacity``;

const Hamburger = ({ onPress }) =>
  <IconLeftContainer onPress={onPress}>
    <Ionicons name="ios-menu" size={30} color="white" />
  </IconLeftContainer>;

export default Hamburger;
