import React from "react";
import styled from "styled-components";

import Item from "./NavbarItem";
import Recall from "../Recall/index";
import iconOrderSrc from "../../assets/order.svg";
import iconBillSrc from "../../assets/bill.svg";
import iconEventsSrc from "../../assets/events.svg";
import iconShoppingBagSrc from "../../assets/shoppingBag.svg";
import { useSelector } from "react-redux";

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
  const shoppingCartList = useSelector((state) => state.menu.bill);

  return (
    <NavbarContainer>
      <Item src={iconOrderSrc} title="주문내역" />
      <Item src={iconBillSrc} title="계산서" gap="1.625vw" />
      <Recall position="center" />
      <Item src={iconEventsSrc} title="이벤트" gap="1.625vw" />
      {shoppingCartList.length > 0 ? (
        <Item title="장바구니" count={shoppingCartList.length} />
      ) : (
        <Item src={iconShoppingBagSrc} title="장바구니" />
      )}
    </NavbarContainer>
  );
}
