import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Header from "../components/shared/Header";
import OrderList from "../components/Bill/OrderList/OrderList";
import DutchPayPrice from "../components/Bill/DutchPayCount/DutchPayPrice";
import DutchPayCount from "../components/Bill/DutchPayCount/DutchPayCount";

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
      <Header title="계산서" />
      <OrderListContainer>
        <OrderList order={order} />
        <DutchPayCount count={count} setCount={setCount} />
        <DutchPayPrice order={order} count={count} />
      </OrderListContainer>
    </BillContainer>
  );
}
