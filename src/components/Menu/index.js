import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 25.3906vw;
  height: 28.125vw;
  padding: 0;
  margin: 1.0156vw 1.4531vw 1.1719vw 0.7813vw;
`;

const MenuWrapper = styled.div``;

const ButtonWrapper = styled.div``;

export default function Menu(props) {
  return (
    <Background>
      <MenuWrapper>
        <ButtonWrapper></ButtonWrapper>
      </MenuWrapper>
    </Background>
  );
}
