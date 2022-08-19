import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import BillHeader from "../components/Bill/Header";
import OrderList from "../components/Bill/OrderList/OrderList";
import DutchPayPrice from "../components/Bill/DutchPay/DutchPayPrice";
import DutchPayCount from "../components/Bill/DutchPay/DutchPayCount";

const BillContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  z-index: 1;
`;

const OrderListContainer = styled.header`
  width: 100vw;
`;

export default function Bill() {
  const [count, setCount] = useState(1);
  const { order } = useSelector((state) => state.menu);

  return (
    <BillContainer>
      <BillHeader />
      <OrderListContainer>
        <OrderList order={order} />
        <DutchPayCount count={count} setCount={setCount} />
        <DutchPayPrice count={count} order={order} />
      </OrderListContainer>
    </BillContainer>
  );
}
