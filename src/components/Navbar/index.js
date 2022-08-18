import React from "react";
import styled from "styled-components";

import Item from "./Item/index";
import Recall from "./Recall/index";
import iconOrderSrc from "../../assets/order.svg";
import iconBillSrc from "../../assets/bill.svg";
import iconBellSrc from "../../assets/bell.svg";
import iconEventsSrc from "../../assets/events.svg";
import iconShoppingBagSrc from "../../assets/shoppingBag.svg";

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
  padding: 0 12.5vw;
  border-top: 0.125vw solid #ccc;
  box-sizing: border-box;
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <Item src={iconOrderSrc} title="주문내역" />
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
