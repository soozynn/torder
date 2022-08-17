import React from "react";
import styled from "styled-components";

import Item from "./Item/index";
import Recall from "./Recall/index";
import iconHamburgerSrc from "../../assets/Navbar/hamburger.svg";
import iconBillSrc from "../../assets/Navbar/bill.svg";
import iconBellSrc from "../../assets/Navbar/bell.svg";
import iconEventsSrc from "../../assets/Navbar/events.svg";
import iconShoppingBagSrc from "../../assets/Navbar/shoppingBag.svg";

const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 13.25vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  border-top: 0.125vw solid #ccc;
  padding: 0 12.5vw;
  box-sizing: border-box;
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <Item src={iconHamburgerSrc} title="주문내역" />
      <Item src={iconBillSrc} title="계산서" gap="1.625vw" />
      <Recall
        src={iconBellSrc}
        title="직원호출"
        width="5.25vw"
        height="5.3711vw"
      />
      <Item src={iconEventsSrc} title="이벤트" gap="1.625vw" />
      <Item src={iconShoppingBagSrc} title="장바구니" />
    </NavbarContainer>
  );
}
