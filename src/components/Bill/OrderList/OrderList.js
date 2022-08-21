import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Order from "./Order";

const BillListHistoryContainer = styled.header`
  padding: 0 5vw;
  box-sizing: border-box;
  height: calc(100vh - 38.75vw);
  overflow: auto;
`;

const TotalPriceWrapper = styled.div`
  padding: 2.9375vw 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "NotoSerifKR-bold";
  font-size: 3.5vw;
  color: #ab240f;
  letter-spacing: -0.175vw;
  box-sizing: border-box;
`;

export default function OrderList({ order }) {
  return (
    <BillListHistoryContainer>
      {order &&
        order.map((menu) => (
          <Order
            key={uuidv4()}
            name={menu.name}
            price={menu.price}
            count={menu.count}
          />
        ))}
      <TotalPriceWrapper>
        <p>총 주문금액</p>
        <p>
          {order
            .reduce(
              (accumulator, object) =>
                accumulator + object.price * object.count,
              0
            )
            .toLocaleString()}
        </p>
      </TotalPriceWrapper>
    </BillListHistoryContainer>
  );
}

OrderList.propTypes = {
  order: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
