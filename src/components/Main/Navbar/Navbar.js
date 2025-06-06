import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import Item from "./NavbarItem";
import RecallIcon from "../RecallIcon/index";
import iconOrderSrc from "@assets/order.svg";
import iconBillSrc from "@assets/bill.svg";
import iconEventsSrc from "@assets/events.svg";
import iconShoppingBagSrc from "@assets/shoppingBag.svg";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 13.25vw;
  background-color: #fff;
  padding: 0 12.5vw;
  border-top: 0.125vw solid #ccc;
  box-sizing: border-box;
`;

export default function Navbar({ cartList, onClick }) {
  const navigate = useNavigate();

  const handleClickOrderHistory = () => {
    navigate("/orderHistory");
  };

  const handleClickBill = () => {
    navigate("/bill");
  };

  const handleClickEvents = () => {
    navigate("/eventList");
  };

  const handleClickRecall = () => {
    navigate("/callStaff");
  };

  return (
    <NavbarContainer>
      <Item
        src={iconOrderSrc}
        title="주문내역"
        onClick={handleClickOrderHistory}
      />
      <Item
        src={iconBillSrc}
        title="계산서"
        gap="1.625vw"
        width="4.275vw"
        height="2.775vw"
        onClick={handleClickBill}
      />
      <RecallIcon position="center" onClick={handleClickRecall} />
      <Item
        src={iconEventsSrc}
        title="이벤트"
        gap="1.625vw"
        width="3.69537vw"
        height="4.1695vw"
        onClick={handleClickEvents}
      />
      {cartList.length > 0 ? (
        <Item title="장바구니" cartList={cartList} onClick={onClick} />
      ) : (
        <Item src={iconShoppingBagSrc} title="장바구니" onClick={onClick} />
      )}
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      count: PropTypes.number,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
