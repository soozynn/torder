import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import imageCloseButtonSrc from "../../../assets/closeButton.svg";
import SidebarItem from "./SidebarItem";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0.25vw 0.25vw 0.375vw 0 rgb(0 0 0 / 26%);
  display: flex;
  z-index: 10;
`;

const SidebarContent = styled.div`
  width: 47.5vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.div`
  flex: 1;
  padding: 4.8125vw 3.75vw;
  box-sizing: border-box;
`;

const CloseButtonIcon = styled.img`
  width: 3.5vw;
  height: 3.5vw;
`;

const SignButtonWrapper = styled.div`
  padding: 8.5vw 5vw 5.8125vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1.875vw;
  border-bottom: 0.125vw solid #ddd;
`;

const SignMessage = styled.p`
  font-family: "NotoSerifKR-bold";
  font-size: 4.25vw;
  letter-spacing: -0.14875vw;
`;

const SignButton = styled.button`
  height: 8.875vw;
  background-color: #2f2a26;
  border: none;
  border-radius: 1.25vw;
  font-size: 3.25vw;
  font-weight: 500;
  letter-spacing: -0.08125vw;
  color: #fff;
`;

export default function Sidebar({ onClick }) {
  return (
    <SidebarContainer>
      <SidebarContent>
        <SignButtonWrapper>
          <SignMessage>
            안녕하세요.
            <br />
            가입이 필요합니다!
          </SignMessage>
          <SignButton>바로 가입하기</SignButton>
        </SignButtonWrapper>
        <SidebarItem title="마이페이지" />
        <SidebarItem title="주문하기" />
        <SidebarItem title="평가하기" />
        <SidebarItem title="회원등급" />
        <SidebarItem title="가입하기" />
        <SidebarItem title="이벤트" />
        <SidebarItem title="언어설정" />
      </SidebarContent>

      <CloseButton onClick={onClick}>
        <CloseButtonIcon alt="close" src={imageCloseButtonSrc} />
      </CloseButton>
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
