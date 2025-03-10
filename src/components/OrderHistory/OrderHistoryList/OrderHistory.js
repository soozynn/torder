import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const HistoryContainer = styled.div`
  margin-top: 3.125vw;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.125vw;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  color: ${(props) => (props.$index === 0 ? "#ab240f" : "#999")};
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.125vw;
  height: 5.125vw;
  border-radius: 1.25vw;
  background-color: ${(props) => (props.$index === 0 ? "#ab240f" : "#999")};
  font-size: 2.75vw;
  font-weight: 700;
  letter-spacing: -0.06875vw;
  color: #fff;
`;

const Text = styled.div`
  font-size: 4vw;
  letter-spacing: -0.2vw;
  font-weight: 700;
  color: ${(props) => (props.$index === 0 ? "#ab240f" : "#999")};
`;

const Time = styled.div`
  flex: 1;
  font-size: 3.25vw;
  letter-spacing: -0.08125vw;
  text-align: right;
  font-weight: 500;
  color: ${(props) => (props.$index === 0 ? "#ab240f" : "#999")};
`;

const HistoryInformation = styled.div`
  padding: 3.125vw 0 4.375vw;
  box-sizing: border-box;
  border-bottom: 0.125vw solid #ddd;
`;

const OrderNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "NotoSerifKR-bold";
  color: #131313;
`;

const OrderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.375vw;
  gap: 1.25vw;
`;

const Title = styled.p`
  flex: 1;
  font-size: 4vw;
  letter-spacing: -0.2vw;
`;

const Quantity = styled.p`
  width: 20.625vw;
  font-size: 3.75vw;
  text-align: right;
`;

export default function OrderHistory({ history, index, orderLength }) {
  const { time, name, count, option } = history;

  return (
    <div>
      <HistoryContainer>
        <TitleWrapper>
          <Number $index={index}>{orderLength - index}</Number>
          <Text $index={index}>{index === 0 ? "마지막 주문" : "이전 주문"}</Text>
          <Time $index={index}>{time}</Time>
        </TitleWrapper>

        <div>
          {option ? (
            option.map((item) => (
              <HistoryInformation key={uuidv4()}>
                <OrderNameWrapper>
                  <Title>{item.name}</Title>
                  <Quantity>{item.count}개</Quantity>
                </OrderNameWrapper>
                <OrderOption />
              </HistoryInformation>
            ))
          ) : (
            <HistoryInformation>
              <OrderNameWrapper>
                <Title>{name}</Title>
                <Quantity>{count}개</Quantity>
              </OrderNameWrapper>
              <OrderOption />
            </HistoryInformation>
          )}
        </div>
      </HistoryContainer>
    </div>
  );
}

OrderHistory.propTypes = {
  history: PropTypes.shape({
    time: PropTypes.string.isRequired,
    name: PropTypes.string,
    count: PropTypes.number,
  }),
  index: PropTypes.number.isRequired,
  orderLength: PropTypes.number.isRequired,
};
