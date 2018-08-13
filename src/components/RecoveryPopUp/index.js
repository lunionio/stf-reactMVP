import React from "react";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components";
import { recoveryPasswordHelper } from "../../lib/recoveryPasswordHelper";
import TextLabel from "../TextLabel";
import Spacer from "../Spacer";
import { colors } from "../../utils/constants";

const RecoveryPopUpContainer = styled.View`
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

const RecoveryPopUpContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  margin-top: 30%;
  bottom: 0;
  left:  0;
  right: 0;
`;

const RecoveryPopUpInputContent = styled.View`
flex: 1;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20;
background-color: white;
margin-left: 10;
margin-right: 10;
padding-left: 15;
padding-right: 15;
padding-top: 10;
padding-bottom: 15;
border-width: 1;
border-color: #a7a7a7;
min-width: 90%;
max-width: 90%;
min-height: 190;
max-height: 190;
`;

const InputTextContent = styled.View`
  flex-direction: row;
  min-height: 60;
  max-height: 60;
  align-items: center;
  min-width: 100%;
  max-width: 100%;
  border-bottom-width: 3;
  border-color: #000;
  padding-left: 15;
  padding-right: 15;
  justify-content: center;
`;

const InputText = styled.TextInput`
  flex: 1;
  font-size: 15;
  min-height: 50;
  max-height: 50;
  margin-left: 10;
  color: black;
`;

const TouchableOpacity = styled.TouchableOpacity``;


const RecoveryPopUpButtonContent = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-around;
margin-top: 10;
margin-left: 30;
margin-right:30;

`;

const RecoveryPopUpButton = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 80%;
  max-width: 80%;
  min-height: 55;
  max-height: 55;
  background-color: ${colors.BASE};
  border-radius: 25;
`;


const CloseSucessButton = styled.Image`
  min-width: 70;
  min-height: 75;
  max-width: 75;
  max-height: 75;
  resize-mode: contain;
`;

const RecoveryPopUp = ({ recoveryPasswordActions, recoveryPasswordData }) => {
  return (
    <RecoveryPopUpContainer>
      {!recoveryPasswordData.close &&
       <RecoveryPopUpContent>
            <RecoveryPopUpInputContent>   
              <Ionicons name="md-lock" size={60} color={colors.BASE} />    
              <Spacer min={15} max={15} />
              <TextLabel
                fontSize={15}
                color={"#a7a7a7"}
                label={"Insira o e-mail cadastrado para recuperar a senha"}
              />      
               <InputTextContent>            
            <Ionicons name="md-mail" size={20} color="#a7a7a7" />      
              <InputText
                placeholderTextColor={colors.BASE}
                placeholder="email@email.com"
                multiline={false}
                numberOfLines={1}
                underlineColorAndroid="transparent"
                autoCapitalize={"none"}  
              />
            </InputTextContent>
           </RecoveryPopUpInputContent>
           <RecoveryPopUpButtonContent>   
            <TouchableOpacity
              onPress={() => recoveryPasswordHelper.close(recoveryPasswordActions)}
            >
              <RecoveryPopUpButton backgroundColor={colors.BASE}>
                <TextLabel fontSize={20} fontWeight={800} color={colors.WHITE} label={"RECUPERAR"} />                
              </RecoveryPopUpButton>            
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => recoveryPasswordHelper.close(recoveryPasswordActions)}>
              <CloseSucessButton
                source={require("../../assets/images/close_confirm_button.png")}
              />
            </TouchableOpacity>  
            </RecoveryPopUpButtonContent> 
       </RecoveryPopUpContent >
         }

    </RecoveryPopUpContainer>
  );
};

export default RecoveryPopUp;
