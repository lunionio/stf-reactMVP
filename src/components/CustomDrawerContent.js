import React from 'react';
import { DrawerItems } from 'react-navigation';
import styled from 'styled-components/native';

import Button from './Button';

const ContainerView = styled.View`
  flex: 1;
  backgroundColor: ${props => props.theme.BASE};
`;

const DrawerContainer = styled.View`
  flex: 8;
`;

const AvatarContainer = styled.View`
  flex: 3;
  top: 10;
  alignItems: center;
  justifyContent: center;
`;

const Avatar = styled.View`
  width: 100;
  height: 100;
  borderRadius: 50;
  backgroundColor: ${props => props.theme.WHITE};
`;

const ItemContainer = styled.View`
  flex: 8;  
`;

const ButtonContainer = styled.View`
  flex: 2;
  justifyContent: center;
  alignItems: center;
`;

const CustomDrawerContent = (props) => (
  <ContainerView>
    <DrawerContainer>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
      <ItemContainer>
        <DrawerItems {...props} />
      </ItemContainer>
    </DrawerContainer>   
  </ContainerView>
);

export default CustomDrawerContent;
