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
  flex: 4;
  top: 30;
  alignItems: center;
  justifyContent: center;
`;

const Avatar = styled.View`
  width: 120;
  height: 120;
  borderRadius: 60;
  backgroundColor: ${props => props.theme.WHITE};
`;

const ItemContainer = styled.View`
  flex: 6;
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
