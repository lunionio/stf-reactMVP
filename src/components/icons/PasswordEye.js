import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const IconRightContainer = styled.TouchableOpacity``;

const PasswordEye = () =>
  <IconRightContainer>
    <Ionicons name="md-eye" size={30} color="black" />
  </IconRightContainer>;

export default PasswordEye;
